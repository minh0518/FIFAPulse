import React, { useEffect, useState } from 'react';
import {
  ContentDiv,
  MyRecordContainerDiv,
  TopRankDiv,
  UserNameAndTopRankDiv,
  UserNameParagraph,
} from './MyRecord.styled';
import { DescriptionDiv, DescriptionParagraph } from '../../Common/styles/styles';
import Footer from '../../Components/Footer';
import MatchResultsByMatchTypes from '../../Components/MatchResultsByMatchTypes';
import Navbar from '../../Components/Navbar';
import TradeLog from '../../Components/TradeLog';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail, Maxdivision } from '../../types/api';
import { convertDate, convertDivisionNumberToDivisionName } from '../../utils/MyRecord';

const MyRecord = () => {
  const { userObj } = useUserObjAPI()!;
  const [selectedValue, setSelectedValue] = useState(50);
  const [matchId, setMatchId] = useState<string[]>([]);
  const [matchDetail, setMatchDetail] = useState<MatchDetail[]>([]);
  const [maxdivision, setMaxdivision] = useState<Maxdivision[] | null>(null);

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

  return (
    <>
      <Navbar page="MyRecord" />
      <MyRecordContainerDiv>
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

        <DescriptionDiv>
          <DescriptionParagraph>
            매치 타입별 경기 데이터와 이적시장 기록 조회를 해 보세요.
            <br />
            <span>데이터가 반영 되기까지 일정 시간이 소요됩니다</span>
          </DescriptionParagraph>
        </DescriptionDiv>

        <ContentDiv>
          <MatchResultsByMatchTypes />
          <TradeLog />
        </ContentDiv>
      </MyRecordContainerDiv>
      <Footer page="MyRecord" />
    </>
  );
};

export default MyRecord;
