import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { authService, dbService } from '../../firebase';
import { useUserObjAPI } from '../Context/UserObj/UserObjContext';
import FIFAData from '../Services/FifaData';
import { NexonUserInfo } from '../types/api';

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  // prompt 옵션 적용(자동 로그인 방지)
  provider?.setCustomParameters({
    prompt: 'select_account',
  });

  console.log(authService);
  await signInWithPopup(authService, provider as GoogleAuthProvider);
};

type searchDBResultType = {
  existOnDB: boolean;
  documentIDForUpdate: null | string;
  existUserDBInfo: any;
};
export const checkDB = async (uid: string) => {
  const dbInfo = await getDocs(collection(dbService, 'userInfo'));
  let obj: searchDBResultType = {
    existOnDB: false,
    documentIDForUpdate: null,
    existUserDBInfo: null,
  };
  dbInfo.forEach((i) => {
    if (i.data().googleUID === uid) {
      obj = { existOnDB: true, documentIDForUpdate: i.id, existUserDBInfo: i.data() };
    }
  });
  return obj;
};

export const updateDB = async (uid: string, chekDBObj: searchDBResultType, setUserObj: any) => {
  const fifa = new FIFAData();
  const fifaUserInfoResult = await fifa.getUserId<NexonUserInfo>(chekDBObj.existUserDBInfo.nickname);
  const updateResult = doc(dbService, 'userInfo', `${chekDBObj.documentIDForUpdate}`);
  await updateDoc(updateResult, {
    // googleUID와 nickname은 굳이 업데이트 x
    FIFAOnlineAccessId: fifaUserInfoResult.accessId,
    level: fifaUserInfoResult.level,
  });

  const obj = {
    googleUID: uid,
    FIFAOnlineAccessId: fifaUserInfoResult.accessId,
    level: fifaUserInfoResult.level as unknown as number,
    nickname: fifaUserInfoResult.nickname,
  };
  setUserObj(obj);
  localStorage.setItem('userObj', JSON.stringify(obj));
};

// 닉네임은 변경 가능성이 있으므로 사용자가 입력한 값으로 받아와야 함
// 어차피 uid는 고정이므로 이걸 기반으로 DB를 찾고 업뎃
export const onLoginClick = async (setUserObj: any, setIsNickNameExist: any) => {
  await loginWithGoogle();
  const chekDBObj = await checkDB(authService.currentUser!.uid);

  if (chekDBObj.existOnDB) {
    updateDB(authService.currentUser!.uid, chekDBObj, setUserObj);
    setIsNickNameExist(true);
  }
  if (!chekDBObj.existOnDB) {
    setIsNickNameExist(false);
  }
};
