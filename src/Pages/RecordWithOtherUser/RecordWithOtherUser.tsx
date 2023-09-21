import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentDiv, RecordWithOtherUserContainerDiv } from './RecordWithOtherUser.styled';
import { DescriptionDiv, DescriptionParagraph } from '../../Common/styles/styles';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import RecordWithOtherUserContent from '../../Components/RecordWithOtherUserContent/RecordWithOtherUserContent';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, NexonUserInfo } from '../../types/api';
import { calcTotalMatchCounts } from '../../utils/MatchResultsByMatchTypes';

const RecordWithOtherUser = () => {
  const [otherUserInfo, setOtherUserInfo] = useState<NexonUserInfo | null>(null);
  const [recordWithOtherUser, setRecordWithOtherUser] = useState<MatchDetail[] | null>(null);
  const [calcResult, setCalcResult] = useState<{ totalMatchLength: number; win: number; drawOrLose: number } | null>(
    null,
  );
  const { userObj } = useUserObjAPI()!;
  const navigate = useNavigate();

  useEffect(() => {
    const getMatchId = async () => {
      const fifa = new FIFAData();
      const response = await fifa.getMatchId(userObj!.FIFAOnlineAccessId, 40, 0, 100);
      if (response.length) {
        const matchDetails: MatchDetail[] = await Promise.all(
          response.map((i) => {
            return fifa.getMatchDetail(i);
          }),
        );

        const filterWithOtherUser = matchDetails.filter(
          (i) =>
            i.matchInfo[0].nickname === otherUserInfo?.nickname || i.matchInfo[1].nickname === otherUserInfo?.nickname,
        );
        setRecordWithOtherUser(filterWithOtherUser);
      }
    };

    if (otherUserInfo) getMatchId();
  }, [otherUserInfo]);

  useEffect(() => {
    const calcMatchResult = () => {
      let calcReult;
      if (recordWithOtherUser) {
        calcReult = calcTotalMatchCounts(recordWithOtherUser, userObj!.nickname);
        setCalcResult(calcReult);
      }
    };
    if (recordWithOtherUser) calcMatchResult();
  }, [recordWithOtherUser]);

  return (
    <>
      <Navbar page="RecordWithOtherUser" />
      <RecordWithOtherUserContainerDiv>
        <DescriptionDiv>
          <DescriptionParagraph>
            다른 유저와의 상대 전적을 검색해 보세요!
            <br />
            <span />
          </DescriptionParagraph>
        </DescriptionDiv>
        <ContentDiv>
          <RecordWithOtherUserContent />
        </ContentDiv>
      </RecordWithOtherUserContainerDiv>
      <Footer page="RecordWithOtherUser" />
    </>
  );
};

export default RecordWithOtherUser;
