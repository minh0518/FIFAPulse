import React, { useState } from 'react';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { NickNameInputProps } from '../../types/props';
import { authService } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { dbService } from '../../../firebase';
import FIFAData from '../../Services/FifaData';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';

const AskNickNameModal = () => {
  const [nickNameInput, setNickNameInput] = useState('');
  const { closeModal } = useModalAPI()!;
  const { setUserObj } = useUserObjAPI()!;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNickNameInput(value);
  };

  const closeModalAndGotoHome = (e: React.FormEvent<HTMLFormElement>) => {
    //실제 피파온라인 api로 해당 닉넴이 있는지 확인후 에러메세지만 띄우는 로직 추가

    e.preventDefault();

    const enrollData = async () => {
      const fifa = new FIFAData();
      const result = await fifa.getUserId(nickNameInput);

      let obj = {
        googleUID: String(authService.currentUser?.uid),
        accessId: result.accessId,
        level: result.level as unknown as number,
        nickname: result.nickname,
      };

      await addDoc(collection(dbService, 'userInfo'), {
        ...obj,
      });
      setUserObj(obj);
      closeModal();
    };

    enrollData();
  };
  return (
    <div>
      닉네임 물어보는 모달창
      <form onSubmit={closeModalAndGotoHome}>
        <input onChange={onChange} value={nickNameInput} />
        <input type="submit" value="확인 후 닫기" />
      </form>
    </div>
  );
};

export default AskNickNameModal;
