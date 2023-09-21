import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  ContentDiv,
  RecordWithOtherUserContainerDiv,
  GameResultForfeitLose,
  GameResultForfeitWin,
  GameResultSpan,
  Table,
  TableContentDiv,
  TableTd,
  TableTr,
} from './RecordWithOtherUser.styled';
import { DescriptionDiv, DescriptionParagraph } from '../../Common/styles/styles';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import RecordWithOtherUserContent from '../../Components/RecordWithOtherUserContent/RecordWithOtherUserContent';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import { NicknameDoesntExistError, NicknameDuplicationError } from '../../Errors/errors';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, NexonUserInfo } from '../../types/api';
import { calcTotalMatchCounts, calcWinngRate } from '../../utils/MatchResultsByMatchTypes';
import { convertDateAndTime, showMyNickNameFirst } from '../../utils/MyRecord';
import { getErrorMessage } from '../../utils/getErrorMessage';

const RecordWithOtherUser = () => {
  const [inputValue, setInputValue] = useState('');
  const [otherUserInfo, setOtherUserInfo] = useState<NexonUserInfo | null>(null);
  const [recordWithOtherUser, setRecordWithOtherUser] = useState<MatchDetail[] | null>(null);
  const [calcResult, setCalcResult] = useState<{ totalMatchLength: number; win: number; drawOrLose: number } | null>(
    null,
  );
  const { userObj, setUserObj } = useUserObjAPI()!;
  const navigate = useNavigate();

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
