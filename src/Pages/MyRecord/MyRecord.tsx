import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChooseStatisticsUl,
  MatchResultsByMatchTypesList,
  MyRecordContainerDiv,
  StatisticsSelectionButton,
  Test,
  TopRankDiv,
  UserNameAndTopRankDiv,
  UserNameParagraph,
} from './MyRecord.styled';
import MatchResultsByMatchTypes from '../../Components/MatchResultsByMatchTypes';
import Navbar from '../../Components/Navbar';
import TradeLog from '../../Components/TradeLog';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, Maxdivision } from '../../types/api';
import { convertDate, convertDivisionNumberToDivisionName, showMyNickNameFirst, convertDateAndTime } from '../../utils/MyRecord';

const MyRecord = () => {
  const { userObj, setUserObj } = useUserObjAPI()!;
  const [selectedValue, setSelectedValue] = useState(50);
  const [matchId, setMatchId] = useState<string[]>([]);
  const [matchDetail, setMatchDetail] = useState<MatchDetail[]>([]);
  const [maxdivision, setMaxdivision] = useState<Maxdivision[] | null>(null);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const updateMaxdivision = async () => {
      const fifa = new FIFAData();
      const maxdivisionResult = await fifa.getMaxdivision(userObj!.FIFAOnlineAccessId);

      setMaxdivision(maxdivisionResult);
    };

    updateMaxdivision();
  }, []);

  useEffect(() => {
    const getMatchId = async () => {
      const fifa = new FIFAData();
      const matchIdPromise = await fifa.getMatchId(userObj!.FIFAOnlineAccessId, selectedValue);
      setMatchId(matchIdPromise);
    };
    getMatchId();
  }, [selectedValue]);

  useEffect(() => {
    const getMatchDetail = async () => {
      if (matchId.length) {
        const fifa = new FIFAData();
        const matchDetailArr: Promise<MatchDetail>[] = matchId.map((i) => {
          return fifa.getMatchDetail(i);
        });
        const matchDetailsPromises: MatchDetail[] = await Promise.all(matchDetailArr);
        setMatchDetail(matchDetailsPromises);
      }
      if (!matchId.length) {
        setMatchDetail([]);
      }
    };
    getMatchDetail();
  }, [matchId]);

  const onChooseStatisticsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    if (name === 'MatchResultsByMatchTypes') setMode(0);
    if (name === 'TradeLog') setMode(1);
  };

  console.log(matchDetail);

  return (
    <>
      <Navbar page="MyRecord" />
      <MyRecordContainerDiv>
        <div>
          <UserNameAndTopRankDiv>
            <UserNameParagraph>{userObj?.nickname} 구단주님</UserNameParagraph>
            <TopRankDiv>
              {maxdivision &&
                maxdivision.map((i, index) => {
                  return (
                    i.matchType === 50 && (
                      <div key={index}>
                        최고 기록 : {convertDivisionNumberToDivisionName(i.division)} ({convertDate(i.achievementDate)})
                      </div>
                    )
                  );
                })}
            </TopRankDiv>
          </UserNameAndTopRankDiv>
        </div>
        <ChooseStatisticsUl>
          <MatchResultsByMatchTypesList>
            <StatisticsSelectionButton type="button" name="MatchResultsByMatchTypes" onClick={onChooseStatisticsClick}>
              매치 기록
            </StatisticsSelectionButton>
          </MatchResultsByMatchTypesList>
          <MatchResultsByMatchTypesList>
            <StatisticsSelectionButton type="button" name="TradeLog" onClick={onChooseStatisticsClick}>
              이적시장 거래 목록
            </StatisticsSelectionButton>
          </MatchResultsByMatchTypesList>
        </ChooseStatisticsUl>

        {mode === 0 ? <MatchResultsByMatchTypes /> : <TradeLog />}
        {/* <MatchResultsByMatchTypes />
        <hr />
        <TradeLog /> */}
      </MyRecordContainerDiv>
    </>
  );
};

export default MyRecord;
