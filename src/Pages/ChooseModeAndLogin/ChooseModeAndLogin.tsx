import React, { useEffect, useState } from 'react';

import { BsPersonCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {
  BeforeLoginDiv,
  AfterLoginDiv,
  ChooseModeAndLoginContainerDiv,
  GuestModeButton,
  LoginButton,
  UseLoginModeButton,
  ModalDiv,
  ProjectNameDiv,
} from './ChooseModeAndLogin.styled';
import { authService, dbService } from '../../../firebase';
import AskNickNameModal from '../../Components/AskNickNameModal';
import AskNickNameModalForGuest from '../../Components/AskNickNameModalForGuest';
import AskUseExistNickNameModal from '../../Components/AskUseExistNickNameModal';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useNickNameChangedAPI } from '../../Context/Nickname/NicknameChangedContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import championsLeagueVideo from '../../images/championsLeagueVideo.mp4';
import GoggleLogo from '../../images/gooleImg.png';
import { NexonUserInfo } from '../../types/api';
import { onLoginClick } from '../../utils/login';
import { onLogoutClick } from '../../utils/logout';

const ChooseModeAndLogin = () => {
  // 모달창에서 입력한 닉네임과 연동된 계정 정보가, DB에 존재하는지에 대한 플래그
  const [isNickNameExist, setIsNickNameExist] = useState<boolean | null>(null);

  const { isNicknameChanged, setIsNicknameChanged } = useNickNameChangedAPI()!;
  const { isModalOpen, openModal } = useModalAPI()!; // context로 관리하는 현재 모달이 열렸는지 알려주는 상태
  const { userObj, setUserObj } = useUserObjAPI()!; // context로 관리하는 현재 로그인 중인 유저의 정보

  const navigate = useNavigate();

  useEffect(() => {
    if (!userObj) {
      onLogoutClick(setIsNickNameExist, setUserObj, setIsNicknameChanged);
    }
  });

  useEffect(() => {
    // isNickNameExist은 초기값이 null이고 로그인이 되면 boolean값으로 변경 됨
    // 이를 바탕으로 아래의 모달둘 중 하나를 띄움
    // ( +닉네임 변경 여부를 묻는 모달창을 로그인 후 최초 1회만 작동하기 위해
    // isNicknameChanged context를 추가로 사용 )
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

  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onLoginClick(setUserObj, setIsNickNameExist);
  };

  const onGuestModeClick = () => {
    openModal(
      <ModalDiv>
        <AskNickNameModalForGuest />
      </ModalDiv>,
    );
  };
  return (
    <ChooseModeAndLoginContainerDiv isModalOpen={isModalOpen}>
      <video autoPlay loop muted playsInline preload="auto">
        <source src={championsLeagueVideo} type="video/mp4" />
      </video>
      <ProjectNameDiv>
        <p>FIFAPulse</p>
        <p>피파온라인4 데이터 통계 서비스</p>
      </ProjectNameDiv>

      {userObj !== null ? ( // 로그인이 됐을 때의 조건부 렌더링
        !isModalOpen && ( // 로그인되면 자동으로 모달창이 먼저 발생하므로 모달창이 닫혔을 때 조건부 렌더링
          <AfterLoginDiv>
            <UseLoginModeButton type="button" onClick={() => navigate('/main-select')}>
              {userObj?.nickname} <span>님 안녕하세요!</span>
            </UseLoginModeButton>
          </AfterLoginDiv>
        )
      ) : (
        // 여기선 어차피 모달창이 발생하지 않으므로 isModalOpen에 의한 조건부 렌더링
        // 할 필요가 없음
        <BeforeLoginDiv>
          <LoginButton type="button" name="google" onClick={onSocialClick}>
            <img src={GoggleLogo} alt="googleLogo" width={40} />
            <p>로그인</p>
          </LoginButton>

          <GuestModeButton type="button" onClick={onGuestModeClick}>
            <BsPersonCheckFill size={30} />
            <p>게스트 모드</p>
          </GuestModeButton>
        </BeforeLoginDiv>
      )}
    </ChooseModeAndLoginContainerDiv>
  );
};

export default ChooseModeAndLogin;
