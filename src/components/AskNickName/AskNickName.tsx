import React from 'react';
import { useModal } from '../../Context/ModalContext/ModalContext';

const AskNickName = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const closeModalAndGotoHome = () => {
    closeModal();
  };
  return (
    <div>
      닉네임 물어보는 모달창
      <button onClick={closeModalAndGotoHome}>확인 후 닫기</button>
    </div>
  );
};

export default AskNickName;
