import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { DiscriptionHeading, FormContainer, GoBackButton, SubmitInput, NickNameInput, ModalContentForm, TestID } from './AskNickNameModal.styled';
import { authService, dbService } from '../../../firebase';
import { useModalAPI } from '../../Context/Modal/ModalContext';
import { useNickNameChangedAPI } from '../../Context/Nickname/NicknameChangedContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { getErrorMessage, getErrorName } from '../../utils/getErrorMessage';

const AskNickNameModal = () => {
  const [nickNameInput, setNickNameInput] = useState('');
  const { closeModal } = useModalAPI()!;
  const { setUserObj } = useUserObjAPI()!;
  const { isNicknameChanged, setIsNicknameChanged } = useNickNameChangedAPI()!;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNickNameInput(value.split(' ').join(''));
  };

  const closeModalAndGotoHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getData = async () => {
      try {
        // 잠시 테스트를 위해 계정 중복 기능은 제거합니다
        // const dbInfo = await getDocs(collection(dbService, 'userInfo'));
        // dbInfo.forEach((i) => {
        //   if (i.data().nickname === nickNameInput) {
        //     throw new SyntaxError('이미 존재하는 계정입니다');
        //   }
        // });

        const fifa = new FIFAData();
        const result = await fifa.getUserId(nickNameInput);

        const userData = await getDocs(collection(dbService, 'userInfo'));
        let alreadyExistDocumentId = '';
        userData.forEach((i) => {
          if (i.data().googleUID === String(authService.currentUser?.uid)) alreadyExistDocumentId = i.id;
        });

        const obj = {
          googleUID: String(authService.currentUser?.uid),
          FIFAOnlineAccessId: result.accessId,
          level: result.level as unknown as number,
          nickname: result.nickname,
        };
        if (alreadyExistDocumentId === '') {
          await addDoc(collection(dbService, 'userInfo'), {
            ...obj,
          });
        }
        if (alreadyExistDocumentId !== '') {
          await updateDoc(doc(dbService, 'userInfo', `${alreadyExistDocumentId}`), {
            level: obj.level,
            FIFAOnlineAccessId: obj.FIFAOnlineAccessId,
            nickname: obj.nickname,
          });

          localStorage.setItem('userObj', JSON.stringify(obj));
        }
        setUserObj(obj);
        setIsNicknameChanged(true);
        localStorage.setItem('isNicknameChanged', JSON.stringify(true));
        closeModal();

        alert('등록이 완료되었습니다!');
      } catch (error) {
        const message = getErrorMessage(error);
        const errorName = getErrorName(error);

        if (errorName === 'AxiosError') {
          alert('해당 계정이 존재하지 않습니다. 다시 한번 입력 해 주세요!');
        } else {
          alert(message);
        }
        // if (errorName === 'SyntaxError') {
        //   console.log(errorName);
        //   alert(message);
        // }

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
    <ModalContentForm onSubmit={closeModalAndGotoHome}>
      <DiscriptionHeading>[구글로그인] 통계를 보고 싶은 피파온라인4 닉네임을 입력 해 주세요!</DiscriptionHeading>

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

export default AskNickNameModal;
