import React, { useState } from 'react';
import { InputForm, InputParagraph, OtherUserNicknameInputContainerDiv } from './OtherUserNicknameInput.styled';
import { useUserObjAPI } from '../../../Context/UserObj/UserObjContext';
import { NicknameDoesntExistError, NicknameDuplicationError } from '../../../Errors/errors';
import FIFAData from '../../../Services/FifaData';
import { NexonUserInfo } from '../../../types/api';
import { OtherUserNicknameInputProps } from '../../../types/props';

const OtherUserNicknameInput = ({ setOtherUserInfo }: OtherUserNicknameInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const { userObj } = useUserObjAPI()!;
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fifa = new FIFAData();
    try {
      if (inputValue === userObj?.nickname)
        throw new NicknameDuplicationError('자기 자신은 입력할 수 없습니다', 400, 'NICKNAME_DUPLICATION');
      const response = await fifa.getUserId<NexonUserInfo>(inputValue);
      setOtherUserInfo(response);
    } catch (error) {
      if (error instanceof NicknameDuplicationError) {
        alert(error.message);
      } else if (error instanceof NicknameDoesntExistError) {
        alert(error.message);
      } else if (error instanceof Error) {
        console.error(error);
        alert(error.message);
      }

      setInputValue('');
    }
  };
  return (
    <OtherUserNicknameInputContainerDiv>
      <InputParagraph>상대 닉네임을 입력해 주세요!</InputParagraph>
      <InputForm onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value.split(' ').join(''))}
        />
        <input type="submit" value="확인" />
      </InputForm>
    </OtherUserNicknameInputContainerDiv>
  );
};

export default OtherUserNicknameInput;
