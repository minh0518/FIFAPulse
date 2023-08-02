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
import AskUseExistNickNameModal from '../../Components/AskUseExistNickNameModal';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useNickNameChangedAPI } from '../../Context/Nickname/NicknameChangedContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import GoggleLogo from '../../images/gooleImg.png';

const ChooseModeAndLogin = () => {
  const [init, setInit] = useState(false);

  // 모달창에서 입력한 닉네임과 연동된 계정 정보가, DB에 존재하는지에 대한 플래그
  const [isNickNameExist, setIsNickNameExist] = useState<boolean | null>(null);

  const { isNicknameChanged, setIsNicknameChanged } = useNickNameChangedAPI()!;
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

            // 기존에 존재했으므로 true
            // 최초 null -> true 로 변경된 것이므로 아래 AskUseExistNickNameModal 모달창이 실행되게 만듦
            // 사실 AskNickNameModal 같이 true->false로 가게 되는 경우 알아서 해당 useEffect가 실행되는데
            // true(초깃값)->true(여기서변경) 로 가게 되면 같은 값이므로 해당 useEffect가 실행되지 않음 그래서 초기값을 null로 두고 진행해야 함
            setIsNickNameExist(true);
          }
          if (!existOnDB && authService.currentUser) {
            // 없다면 모달창 띄워서 닉네임 입력받아야 함
            // 최초 null -> false 로 변경된 것이므로 아래 AskNickNameModal 모달창이 실행되게 만듦
            setIsNickNameExist(false);
          }
        };

        getDataAndUpdateInfo();
      }
      if (!user) {
        // 로그아웃 됐을 때

        console.log('logged out');
        setIsNickNameExist(null); // 모달 창에서 뒤로가기 선택하고 재 로그인시
        // 모달창 띄우는 useEffect를 실행하기 위해서 의존성 배열을 변경해야 하므로
        // 의도적으로 isNickNameExist를 초기값으로 세팅
        // (로그아웃 됐을 때 null -> 재로그인시 false로 변경돼서 useEffect 실행)

        setUserObj(null);
        // 새로고침 시 , context값 유지를 위해 로컬스토리지 저장
        localStorage.setItem('userObj', JSON.stringify(null));

        setIsNicknameChanged(false);
        localStorage.setItem('isNicknameChanged', JSON.stringify(false));
      }
      setInit(true);
    });
  }, []);

  // isNickNameExist의 여부에 따라 서로 다른 모달창을 띄움
  useEffect(() => {
    console.log(`isNickNameExist ${isNickNameExist}`);

    // 여기에 추가로 조건을 넣어야 하는데 뭘 넣어야 하지?
    // 전역 상태관리로 사용하는게 베스트이므로 추후 상태관리 라이브러리로 100% 변경
    // 다만 그 전에 현재는 어떻게 할까
    // DB에 로그인 시간 새로 추가하고 이걸 기반해서 ?
    // 전역으로 관리하는걸 대신해서 임시로 로컬스토리지 사용?
    if (isNickNameExist === true && !isNicknameChanged) {
      openModal(
        <ModalDiv>
          <AskUseExistNickNameModal />
        </ModalDiv>,
      );
    }
    if (isNickNameExist === false) {
      openModal(
        <ModalDiv>
          <AskNickNameModal />
        </ModalDiv>,
      );
    }
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

  // console.log(isModalOpen);

  const onLogoutClick = () => {
    signOut(authService);
    navigate('/', { replace: true });
  };
  return (
    <ChooseModeAndLoginContainerDiv isModalOpen={isModalOpen}>
      {init ? ( // 화면이 띄워지고 로그인 정보가 불러지기 전 후에 대한 조건부 렌더링
        authService.currentUser !== null ? ( // 로그인이 됐을때의 조건부 렌더링
          !isModalOpen && (
            <ButtonsDiv>
              <LoginModeButton type="button" onClick={() => navigate('/main-select')}>
                {userObj?.nickname} <span>님 안녕하세요!</span>
              </LoginModeButton>
              <LogoutButton type="button" onClick={onLogoutClick}>
                로그아웃 <br />[ 구글 계정 or 닉네임 변경 ]
              </LogoutButton>
            </ButtonsDiv>
          )
        ) : (
          <LoginButton type="button" name="google" onClick={onSocialClick}>
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
