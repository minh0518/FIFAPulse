import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {
  ButtonsDiv,
  ChooseModeAndLoginContainerDiv,
  LoginButton,
  LoginModeButton,
  LoginParagraph,
  LogoutButton,
  ModalDiv,
  SelectModeHeading,
} from './ChooseModeAndLogin.styled';
import { authService, dbService } from '../../../firebase';
import AskNickNameModal from '../../Components/AskNickNameModal';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import GoggleLogo from '../../images/gooleImg.png';

const ChooseModeAndLogin = () => {
  const [init, setInit] = useState(false);

  // 모달창에서 입력한 닉네임과 연동된 계정 정보가, DB에 존재하는지에 대한 플래그
  // 새로고침 됐을 때 기본적으로 true값이어야 모달창이 안 뜸
  // (최초 상태로는 안 뜨는게 맞는것이다)
  const [isNickNameExist, setIsNickNameExist] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useLoginAPI()!; // context로 관리하는 로그인이 되어 있는지 알려주는 상태
  const { isModalOpen, openModal } = useModalAPI()!; // context로 관리하는 현재 모달이 열렸는지 알려주는 상태
  const { userObj, setUserObj } = useUserObjAPI()!; // context로 관리하는 현재 로그인 중인 유저의 정보

  // console.log(authService.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      console.log(user);
      if (user) {
        // 로그인 됐을 때

        console.log('logged in');
        setIsLoggedIn(true);

        // DB에 입력한 닉네임으로 저장된 정보가 있는지 확인

        let existOnDB = false;
        let documentIDForUpdate: string;
        let existUserDBInfo: any;

        const getDataAndUpdateInfo = async () => {
          const dbInfo = await getDocs(collection(dbService, 'userInfo'));
          dbInfo.forEach((i) => {
            if (i.data().googleUID === user.uid) {
              existOnDB = true; // 존재한다면 true
              documentIDForUpdate = i.id; // 해당 firestore의 documentId를 가져옴
              existUserDBInfo = i.data();
            }
          });

          if (existOnDB && authService.currentUser) {
            // 이미 존재하더라도 , 레벨 정보 같은게 바뀔 수도 있으므로 업데이트
            const fifa = new FIFAData();
            const result = await fifa.getUserId(existUserDBInfo.nickname);

            const updateResult = doc(dbService, 'userInfo', `${documentIDForUpdate}`);
            await updateDoc(updateResult, {
              // googleUID와 nickname은 굳이 업데이트 x
              FIFAOnlineAccessId: result.accessId,
              level: result.level,
            });

            const obj = {
              googleUID: user.uid,
              FIFAOnlineAccessId: result.accessId,
              level: result.level as unknown as number,
              nickname: result.nickname,
            };

            // 유저 객체 업데이트
            setUserObj(obj);
            // 새로고침 시 , context값 유지를 위해 로컬스토리지 저장
            localStorage.setItem('userObj', JSON.stringify(obj));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));

            // 기존에 존재했으므로 true
            setIsNickNameExist(true);
          }
          if (!existOnDB && authService.currentUser) {
            // 없다면 모달창 띄워서 닉네임 입력받아야 함
            setIsNickNameExist(false);
          }
        };

        getDataAndUpdateInfo();
      }
      if (!user) {
        // 로그아웃 됐을 때

        console.log('logged out');
        setIsNickNameExist(true); // 모달 창에서 뒤로가기 선택하고 재 로그인시
        // 모달창 띄우는 useEffect를 실행하기 위해서 의존성 배열을 변경해야 하므로
        // 의도적으로 isNickNameExist를 초기값으로 세팅
        // (로그아웃 됐을 때true -> 재로그인시 false로 변경돼서 useEffect 실행)

        setIsLoggedIn(false);
        setUserObj(null);
        // 새로고침 시 , context값 유지를 위해 로컬스토리지 저장
        localStorage.setItem('userObj', JSON.stringify(null));
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
      }
      setInit(true);
    });
  }, []);
  console.log(userObj);

  // isNickNameExist의 여부에 따라 모달창을 띄움
  useEffect(() => {
    isNickNameExist
      ? ''
      : openModal(
          <ModalDiv>
            <AskNickNameModal />
          </ModalDiv>,
        );
  }, [isNickNameExist]);

  // 로그인하기 버튼 시 작동하는 이벤트
  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    // prompt 옵션 적용으로 자동 로그인 방지
    provider?.setCustomParameters({
      prompt: 'select_account',
    });

    const data = await signInWithPopup(authService, provider as GoogleAuthProvider);
  };

  console.log(isModalOpen);

  const onLogoutClick = () => {
    signOut(authService);
    navigate('/', { replace: true });
  };
  return (
    <ChooseModeAndLoginContainerDiv isModalOpen={isModalOpen}>
      {init ? ( // 화면이 띄워지고 로그인 정보가 불러지기 전 후에 대한 조건부 렌더링
        isLoggedIn ? ( // 로그인이 됐을때의 조건부 렌더링
          !isModalOpen && (
            <ButtonsDiv>
              <LoginModeButton isLoggedIn={isLoggedIn} type="button" onClick={() => navigate('/main-select')}>
                {userObj?.nickname} <span>님 안녕하세요!</span>
              </LoginModeButton>
              <LogoutButton type="button" onClick={onLogoutClick}>
                로그아웃 <br />
                (구글 계정 변경)
              </LogoutButton>
            </ButtonsDiv>
          )
        ) : (
          // <LoginModeButton isLoggedIn={isLoggedIn} type="button" name="google" onClick={onSocialClick}>
          //   로그인 (Google)
          // </LoginModeButton>
          <LoginButton isLoggedIn={isLoggedIn} type="button" name="google" onClick={onSocialClick}>
            <img src={GoggleLogo} alt="googleLogo" width={200} />
            <LoginParagraph>로그인</LoginParagraph>
          </LoginButton>
        )
      ) : (
        'Loading...'
      )}
    </ChooseModeAndLoginContainerDiv>
  );
};

export default ChooseModeAndLogin;
