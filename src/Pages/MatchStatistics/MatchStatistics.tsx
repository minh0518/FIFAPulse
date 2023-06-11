import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingDiv,
  MatchStatisticsContainerDiv,
  NickNameSpan,
  PlayerNickNames,
  ScoresAndTimeDiv,
  ScoresDiv,
  TimeDiv,
} from './MatchStatistics.styled';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import Navbar from '../../Components/Navbar';
import Statistics from '../../Components/Statistics';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail } from '../../types/api';
import { myDataIndex, selectedUsertStatistics } from '../../types/states';
import { convertDateAndTime } from '../../utils/MyRecord';

const MatchStatistics = () => {
  const { matchId } = useParams();
  const [matchDetail, setMatchDetail] = useState<MatchDetail | null>(null); // 한 매치의 전체 데이터
  const [myDataIndex, setMyDataIndex] = useState<myDataIndex | null>(null); // 로그인 한 유저의 데이터 인덱스 (1대1 이므로 matchDetail.matchInfo[0] 아니면 matchDetail.matchInfo[1])
  const { userObj, setUserObj } = useUserObjAPI()!;
  const [selectedUsertStatistics, setSelectedUsertStatistics] = useState<selectedUsertStatistics>(0); // 유저의 이름을 클릭함에 따라 보여줄 데이터의 인덱스 (1대1 이므로 matchDetail.matchInfo[0] 아니면 matchDetail.matchInfo[1])

  useEffect(() => {
    // 최초에 api를 불러와서 데이터 세팅
    const getMatchDetail = async () => {
      const fifa = new FIFAData();
      const result = await fifa.getMatchDetail(matchId!);
      let indexInfo = {} as myDataIndex; // 확실한 상황이므로 type assertion 사용

      // matchDetail.matchInfo[0]이 현재 로그인한 계정이라면
      result.matchInfo[0].accessId === userObj?.FIFAOnlineAccessId ? (indexInfo = { mine: 0, other: 1 }) : (indexInfo = { mine: 1, other: 0 });

      setMyDataIndex(indexInfo);
      setMatchDetail(result);
      setSelectedUsertStatistics(indexInfo.mine); // 디폴트로 자기 자신의 정보를 보여줌
    };
    getMatchDetail();
  }, []);

  const onUserNicknameClick = (choose: string) => {
    let index: 0 | 1 = 0;
    if (choose === 'mine') {
      index = myDataIndex!.mine;
    }
    if (choose === 'other') {
      index = myDataIndex!.other;
    }
    setSelectedUsertStatistics(index);
  };
  console.log(selectedUsertStatistics);

  const showResultWithScore = (index: 0 | 1): React.ReactNode => {
    if (matchDetail?.matchInfo[index].matchDetail.matchEndType === 1) {
      return <h2>몰수 승 ({matchDetail?.matchInfo[index].shoot.goalTotal}) </h2>;
    }

    if (matchDetail?.matchInfo[index].matchDetail.matchEndType === 2) {
      return <h2>({matchDetail?.matchInfo[index].shoot.goalTotal}) 몰수 패 </h2>;
    }
    return <h2>{matchDetail?.matchInfo[index].shoot.goalTotalDisplay}</h2>;
  };

  if (!(matchDetail && myDataIndex)) {
    return (
      <LoadingDiv>
        <Loading />
      </LoadingDiv>
    );
  }
  console.log(matchDetail);
  return (
    <>
      <Navbar page="MatchResultWithMatchStatistics" />
      <MatchStatisticsContainerDiv>
        <PlayerNickNames>
          <button type="button" onClick={() => onUserNicknameClick('mine')}>
            <NickNameSpan myDataIndex={myDataIndex.mine} selectedUsertStatistics={selectedUsertStatistics}>
              {matchDetail.matchInfo[myDataIndex!.mine].nickname}
            </NickNameSpan>
          </button>
          <h2>vs</h2>
          <button type="button" onClick={() => onUserNicknameClick('other')}>
            <NickNameSpan myDataIndex={myDataIndex.other} selectedUsertStatistics={selectedUsertStatistics}>
              {matchDetail.matchInfo[myDataIndex!.other].nickname}
            </NickNameSpan>
          </button>
        </PlayerNickNames>
        <ScoresAndTimeDiv>
          <ScoresDiv>
            {showResultWithScore(myDataIndex.mine)}
            &nbsp;&nbsp;<h2>:</h2>&nbsp;&nbsp;
            {showResultWithScore(myDataIndex.other)}
          </ScoresDiv>
          <TimeDiv>
            <p>{convertDateAndTime(matchDetail.matchDate)}</p>
          </TimeDiv>
        </ScoresAndTimeDiv>

        <Statistics matchDetail={matchDetail} myDataIndex={myDataIndex} selectedUsertStatistics={selectedUsertStatistics} />
      </MatchStatisticsContainerDiv>
      <Footer page="MatchResultWithMatchStatistics" />
    </>
  );
};

export default MatchStatistics;
