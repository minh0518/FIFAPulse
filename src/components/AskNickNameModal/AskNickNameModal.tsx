import React, { useState } from 'react';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { authService } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { dbService } from '../../../firebase';
import FIFAData from '../../Services/FifaData';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import { getErrorMessage, getErrorName } from '../../utils/getErrorMessage';

const AskNickNameModal = () => {
  const [nickNameInput, setNickNameInput] = useState('');
  const { closeModal } = useModalAPI()!;
  const { setUserObj } = useUserObjAPI()!;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNickNameInput(value);
  };

  const closeModalAndGotoHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getData = async () => {
      try {
        const dbInfo = await getDocs(collection(dbService, 'userInfo'));
        dbInfo.forEach((i) => {
          if (i.data().nickname === nickNameInput) {
            throw new SyntaxError('이미 존재하는 계정입니다');
          }
        });

        const fifa = new FIFAData();
        const result = await fifa.getUserId(nickNameInput);

        let obj = {
          googleUID: String(authService.currentUser?.uid),
          FIFAOnlineAccessId: result.accessId,
          level: result.level as unknown as number,
          nickname: result.nickname,
        };

        await addDoc(collection(dbService, 'userInfo'), {
          ...obj,
        });
        setUserObj(obj);
        closeModal();
        alert('등록이 완료되었습니다!');
      } catch (error) {
        const message = getErrorMessage(error);
        const errorName = getErrorName(error);

        if (errorName === 'AxiosError') {
          alert('해당 계정이 존재하지 않습니다. 다시 한번 입력 해 주세요!');
        }
        if (errorName === 'SyntaxError') {
          console.log(errorName);
          alert(message);
        }

        setNickNameInput('');
      }
    };

    getData();
  };
  return (
    <div>
      안녕하세요! 처음 접속하셨을 경우, 실제 피파온라인 계정과 연동이 필요합니다 피파온라인에서 사용하고 계시는 닉네임을 입력 해 주세요!
      <form onSubmit={closeModalAndGotoHome}>
        <input onChange={onChange} value={nickNameInput} />
        <input type="submit" value="확인 후 닫기" />
      </form>
    </div>
  );
};

export default AskNickNameModal;
