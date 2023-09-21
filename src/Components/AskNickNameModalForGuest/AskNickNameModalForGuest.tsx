import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DiscriptionHeading,
  FormContainer,
  GoBackButton,
  SubmitInput,
  NickNameInput,
  ModalContentForm,
  TestID,
} from './AskNickNameModalForGuest.styled';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useNickNameChangedAPI } from '../../Context/Nickname/NicknameChangedContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import { NicknameDoesntExistError } from '../../Errors/errors';
import FIFAData from '../../Services/FifaData';
import { NexonUserInfo } from '../../types/api';

const AskGuestNicknameModal = () => {
  const [nickNameInput, setNickNameInput] = useState('');
  const { closeModal } = useModalAPI()!;
  const { setUserObj } = useUserObjAPI()!;
  const { setIsNicknameChanged } = useNickNameChangedAPI()!;
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickNameInput(value.split(' ').join(''));
  };

  const closeModalAndGotoHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getData = async () => {
      try {
        const fifa = new FIFAData();
        const fifaUserData = await fifa.getUserId<NexonUserInfo>(nickNameInput);

        const obj = {
          googleUID: 'guest',
          FIFAOnlineAccessId: fifaUserData.accessId,
          level: fifaUserData.level as unknown as number,
          nickname: fifaUserData.nickname,
        };

        setUserObj(obj);
        localStorage.setItem('userObj', JSON.stringify(obj));

        setIsNicknameChanged(true);
        localStorage.setItem('isNicknameChanged', JSON.stringify(true));

        closeModal();

        alert('등록이 완료되었습니다!');
        navigate('/main-select');
      } catch (error) {
        if (error instanceof NicknameDoesntExistError) {
          alert(error.message);
        } else if (error instanceof Error) {
          console.error(error);
          alert(error.message);
        }

        setNickNameInput('');
      }
    };

    getData();
  };

  const onClose = () => {
    closeModal();
  };
  return (
    <ModalContentForm onSubmit={closeModalAndGotoHome}>
      <DiscriptionHeading>[게스트용] 통계를 보고 싶은 피파온라인4 닉네임을 입력 해 주세요! </DiscriptionHeading>
      <TestID>테스트용 계정 : 웰시코기발바닥</TestID>
      <NickNameInput onChange={onChange} value={nickNameInput} />
      <FormContainer>
        <GoBackButton type="button" onClick={onClose}>
          뒤로가기
        </GoBackButton>
        <SubmitInput type="submit" value="확인" />
      </FormContainer>
    </ModalContentForm>
  );
};

export default AskGuestNicknameModal;
