import React, { useEffect, useState } from 'react';
import { authService } from '../../../firebase';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import AskNickNameModal from '../../Components/AskNickNameModal';
import FIFAData from '../../Services/FifaData';
import { dbService } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';

const ChooseModeAndLogin = () => {
  const [init, setInit] = useState(false);

  // 새로고침 됐을 때 기본적으로 true값이어야 모달창이 안 뜸
  // (최초 상태로는 안 뜨는게 맞는것이다)
  const [isNickNameExist, setIsNickNameExist] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useLoginAPI()!;
  const { isModalOpen, openModal } = useModalAPI()!;
  const { userObj, setUserObj } = useUserObjAPI()!;

  console.log(authService.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        console.log('logged in');
        setIsLoggedIn(true);
        // DB에 입력한 닉네임으로 된 정보가 있는지 확인
        let existOnDB: boolean = false;
        let documentIDForUpdate: string;
        let existUserDBInfo: any;

        const getDataAndUpdateInfo = async () => {
          const dbInfo = await getDocs(collection(dbService, 'userInfo'));
          dbInfo.forEach((i) => {
            if (i.data().googleUID == user.uid) {
              existOnDB = true; // 존재한다면 true
              documentIDForUpdate = i.id;
              existUserDBInfo = i.data();
            }
          });

          if (existOnDB && authService.currentUser) {
            //이미 존재하더라도 , 레벨 정보 같은게 바뀔 수도 있으므로 업데이트
            const fifa = new FIFAData();
            const result = await fifa.getUserId(existUserDBInfo.nickname);

            const updateResult = doc(dbService, 'userInfo', `${documentIDForUpdate}`);
            await updateDoc(updateResult, {
              //googleUID와 nickname은 굳이 업데이트 x
              FIFAOnlineAccessId: result.accessId,
              level: result.level,
            });

            setUserObj({
              googleUID: user.uid,
              FIFAOnlineAccessId: result.accessId,
              level: result.level as unknown as number,
              nickname: result.nickname,
            });
            setIsNickNameExist(true);
          }
          if (!existOnDB && authService.currentUser) {
            // 없으므로 모달창 띄워서 닉네임 입력받아야 함

            setIsNickNameExist(false);
          }
        };

        getDataAndUpdateInfo();
      }
      if (!user) {
        console.log('logged out');
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  useEffect(() => {
    isNickNameExist ? '' : openModal(<AskNickNameModal />);
  }, [isNickNameExist]);

  // console.log(userObj);

  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    const data = await signInWithPopup(authService, provider as GoogleAuthProvider);
  };

  return (
    <div>
      <h1>모드를 선택하세요</h1>
      {init ? ( //화면이 띄워지고 로그인 정보가 불러지기 전 후에 대한 조건부 렌더링
        isLoggedIn ? ( // 로그인이 됐을때의 조건부 렌더링
          isModalOpen ? ( // 로그인이 되고 만약 ID를 입력받아야 해서 모달창이 띄워진 것에 대한 조건부 렌더링
            <>닉네임을 입력 할 때까지 기다리는 중...</>
          ) : (
            <>
              <button onClick={() => navigate('/guest')}>게스트 모드</button>
              <button onClick={() => navigate('/main-select')}>{userObj?.nickname} 님 안녕하세요!</button>
            </>
          )
        ) : (
          <>
            <button onClick={() => navigate('/guest')}>게스트 모드</button>

            {/* 추후 로그인 경로가 다양해지면 로그인 하기 버튼 전체를 컴포넌트로 분리 <LogIn />*/}
            <button name="google" onClick={onSocialClick}>
              로그인 하기(Google)
            </button>
          </>
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ChooseModeAndLogin;
