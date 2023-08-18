import React, { useEffect, useState } from 'react';
import CalcResult from './CalcResult';
import OtherUserNicknameInput from './OtherUserNicknameInput';
import { RecordWithOtherUserContentContainerDiv } from './RecordWithOtherUserContent.styled';
import { MatchDetail, NexonUserInfo } from '../../types/api';

const RecordWithOtherUserContent = () => {
  const [otherUserInfo, setOtherUserInfo] = useState<NexonUserInfo | null>(null);

  return (
    <RecordWithOtherUserContentContainerDiv>
      <OtherUserNicknameInput setOtherUserInfo={setOtherUserInfo} />
      <CalcResult otherUserInfo={otherUserInfo} />
    </RecordWithOtherUserContentContainerDiv>
  );
};

export default RecordWithOtherUserContent;
