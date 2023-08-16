import React, { useEffect, useState } from 'react';
import CalcResult from './CalcResult';
import OtherUserNicknameInput from './OtherUserNicknameInput';
import { MatchDetail, NexonUserInfo } from '../../types/api';

const RecordWithOtherUserContent = () => {
  const [otherUserInfo, setOtherUserInfo] = useState<NexonUserInfo | null>(null);

  return (
    <div>
      <OtherUserNicknameInput setOtherUserInfo={setOtherUserInfo} />
      <CalcResult otherUserInfo={otherUserInfo} />
    </div>
  );
};

export default RecordWithOtherUserContent;
