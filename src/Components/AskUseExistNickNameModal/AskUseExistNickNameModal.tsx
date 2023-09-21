import React from 'react';
import { ModalDiv } from './AskUseExistNickNameModal.styled';

import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useNickNameChangedAPI } from '../../Context/Nickname/NicknameChangedContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import AskNickNameModal from '../AskNickNameModal';

const AskUseExistNickNameModal = () => {
  const { closeModal } = useModalAPI()!;
  const { openModal } = useModalAPI()!; // context로 관리하는 현재 모달이 열렸는지 알려주는 상태
  const { userObj } = useUserObjAPI()!; // context로 관리하는 현재 로그인 중인 유저의 정보
  const { setIsNicknameChanged } = useNickNameChangedAPI()!;
  const onClick = (value: boolean) => {
    closeModal(); // 먼저 닫고 새로운 모달을 열어야 함
    if (value) {
      setIsNicknameChanged(true);
      localStorage.setItem('isNicknameChanged', JSON.stringify(true));
    }
    if (!value) {
      openModal(
        <ModalDiv>
          <AskNickNameModal />
        </ModalDiv>,
      );
    }
  };
  return (
    <div>
      <h1>기존 닉네임 &quot;{userObj?.nickname}&quot; 을(를) 그대로 사용 하시나요?</h1>
      <button type="button" onClick={() => onClick(true)}>
        네!
      </button>
      <button type="button" onClick={() => onClick(false)}>
        아니오
      </button>
    </div>
  );
};

export default AskUseExistNickNameModal;
