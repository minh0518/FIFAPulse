import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import {
  DiscriptionHeading,
  ModalContentDiv,
  FormContainer,
  GoBackButton,
  SubmitInput,
  NickNameInputDiv,
  NickNameInput,
} from './AskNickNameModal.styled';
import { authService, dbService } from '../../../firebase';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { getErrorMessage, getErrorName } from '../../utils/getErrorMessage';

const AskNickNameModal = () => {
  const [nickNameInput, setNickNameInput] = useState('');
  const { setIsLoggedIn } = useLoginAPI()!;
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

        const obj = {
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

  const onClose = () => {
    signOut(authService);
    closeModal();
  };
  return (
    <ModalContentDiv>
      <div>
        <DiscriptionHeading>계정 연동을 위해 피파온라인 닉네임을 입력 해 주세요!</DiscriptionHeading>
        <form onSubmit={closeModalAndGotoHome}>
          <NickNameInputDiv>
            <NickNameInput onChange={onChange} value={nickNameInput} />
          </NickNameInputDiv>
          <FormContainer>
            <GoBackButton type="button" onClick={onClose}>
              뒤로가기
            </GoBackButton>
            <SubmitInput type="submit" value="확인" />
          </FormContainer>
        </form>
      </div>
    </ModalContentDiv>
  );
};

export default AskNickNameModal;
