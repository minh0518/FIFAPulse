import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingDiv,
  MatchScoreAndTimes,
  MatchStatisticsContainerDiv,
  MatchTimeDiv,
  MyGoalTime,
  NickNameSpan,
  OtherGoalTime,
  OwnGoalUl,
  PlayerNickNames,
  Scores,
  ScoresAndGoalTime,
} from './MatchStatistics.styled';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import Navbar from '../../Components/Navbar';
import Statistics from '../../Components/Statistics';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import goalImg from '../../images/goalImg.jpg';
import { MatchDetail, matchInfoType } from '../../types/api';
import { myDataIndex, selectedUsertStatistics } from '../../types/states';
import { checkOwnGoal, convertPlayerName, extractGoalInfo } from '../../utils/MatchStatistics';
import { convertDateAndTime } from '../../utils/MyRecord';

const MatchStatistics = () => {
  const { matchId } = useParams();
  const [matchDetail, setMatchDetail] = useState<MatchDetail | null>(null); // 한 매치의 전체 데이터
  const [myDataIndex, setMyDataIndex] = useState<myDataIndex | null>(null); // 로그인 한 유저의 데이터 인덱스 (1대1 이므로 matchDetail.matchInfo[0] 아니면 matchDetail.matchInfo[1])
  const { userObj, setUserObj } = useUserObjAPI()!;

  // 추가적인 기능은 없으나 , 추후 코드가 길어지는 것을 방지하기 위해
  // 변수형태로 간결하게 사용할 목적으로 선언
  const [myMatchInfo, setMyMatchInfo] = useState<matchInfoType | null>(null);
  const [otherMatchInfo, setOtherMatchInfo] = useState<matchInfoType | null>(null);

  // 유저의 이름을 클릭함에 따라 보여줄 데이터의 인덱스 (1대1 이므로 matchDetail.matchInfo[0] 아니면 matchDetail.matchInfo[1])
  // 현재는 사용중이지 않지만 추후 쓰일 수 있으므로 유지
  const [selectedUsertStatistics, setSelectedUsertStatistics] = useState<selectedUsertStatistics>(0);

  useEffect(() => {
    // 최초에 api를 불러와서 데이터 세팅
    const getMatchDetail = async () => {
      const fifa = new FIFAData();
      const matchDetailResult = await fifa.getMatchDetail(matchId!);
      let indexInfo = {} as myDataIndex; // 확실한 상황이므로 type assertion 사용

      // matchDetail.matchInfo[0]이 현재 로그인한 계정이라면
      matchDetailResult.matchInfo[0].accessId === userObj?.FIFAOnlineAccessId
        ? (indexInfo = { mine: 0, other: 1 })
        : (indexInfo = { mine: 1, other: 0 });

      setMyDataIndex(indexInfo);
      setMatchDetail(matchDetailResult);
      setSelectedUsertStatistics(indexInfo.mine); // 디폴트로 자기 자신의 정보를 보여줌

      setMyMatchInfo(matchDetailResult.matchInfo[indexInfo.mine]);
      setOtherMatchInfo(matchDetailResult.matchInfo[indexInfo.other]);
      // setMyMatchInfo(JSON.parse(JSON.stringify(matchDetailResult.matchInfo[indexInfo.mine])));
      // setOtherMatchInfo(JSON.parse(JSON.stringify(matchDetailResult.matchInfo[indexInfo.other])));
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

  const showResultWithScore = (target: string): React.ReactNode => {
    if (target === 'mine') {
      if (myMatchInfo?.matchDetail.matchEndType === 1) {
        return (
          <p>
            몰수승<span>({myMatchInfo.shoot.goalTotal})</span>
          </p>
        );
      }
      if (myMatchInfo?.matchDetail.matchEndType === 2) {
        return (
          <p>
            몰수패<span>({myMatchInfo.shoot.goalTotal})</span>
          </p>
        );
      }
      return <p>{myMatchInfo?.shoot.goalTotalDisplay}</p>;
    }

    if (target === 'other') {
      if (otherMatchInfo?.matchDetail.matchEndType === 1) {
        return (
          <p>
            <span>({otherMatchInfo.shoot.goalTotal})몰수승</span>
          </p>
        );
      }
      if (otherMatchInfo?.matchDetail.matchEndType === 2) {
        return (
          <p>
            <span>({otherMatchInfo.shoot.goalTotal})몰수패</span>
          </p>
        );
      }
      return <p>{otherMatchInfo?.shoot.goalTotalDisplay}</p>;
    }

    // eslint 에러 방지용
    return <></>;
  };

  if (!(matchDetail && myDataIndex)) {
    return (
      <LoadingDiv>
        <Loading />
      </LoadingDiv>
    );
  }
  // console.log(matchDetail);

  // console.log(extractGoalInfo(matchDetail.matchInfo[myDataIndex.mine].shootDetail));
  return (
    <>
      {/* matchDetail 과 myDataIndex가 로딩되지 않으면 로딩인디케이터를 띄워주기 때문에
     여기선 조건부 렌더링을 사용할 필요 없이 바로 matchDetail 와 myDataIndex를 사용할 수 있으며
     non-null assertion또한 자유롭게 사용 가능 */}
      <Navbar page="MatchStatistics" />
      <MatchStatisticsContainerDiv>
        <PlayerNickNames>
          <button type="button" onClick={() => onUserNicknameClick('mine')}>
            <NickNameSpan myDataIndex={myDataIndex.mine} selectedUsertStatistics={selectedUsertStatistics}>
              {myMatchInfo!.nickname}
            </NickNameSpan>
          </button>
          <h2>vs</h2>
          <button type="button" onClick={() => onUserNicknameClick('other')}>
            <NickNameSpan myDataIndex={myDataIndex.other} selectedUsertStatistics={selectedUsertStatistics}>
              {otherMatchInfo!.nickname}
            </NickNameSpan>
          </button>
        </PlayerNickNames>
        <MatchScoreAndTimes>
          <ScoresAndGoalTime>
            <MyGoalTime>
              {extractGoalInfo(myMatchInfo!.shootDetail).map((i, index) => {
                return (
                  <li key={index}>
                    <img src={goalImg} alt="goalImg" width="18" />
                    {i.goalTime} {convertPlayerName(i.spId)}
                  </li>
                );
              })}
              {myMatchInfo!.shoot.ownGoal !== 0 && (
                <OwnGoalUl>
                  {checkOwnGoal(myMatchInfo!.shoot.ownGoal).map((i) => {
                    return i;
                  })}
                </OwnGoalUl>
              )}
            </MyGoalTime>
            <Scores>
              {/* <span>{showResultWithScore(myDataIndex.mine)}</span> */}
              <span>{showResultWithScore('mine')}</span>
              &nbsp;&nbsp;<h2>:</h2>&nbsp;&nbsp;
              {/* <span>{showResultWithScore(myDataIndex.other)}</span> */}
              <span>{showResultWithScore('other')}</span>
            </Scores>
            <OtherGoalTime>
              {extractGoalInfo(otherMatchInfo!.shootDetail).map((i, index) => {
                return (
                  <li key={index}>
                    <img src={goalImg} alt="goalImg" width="18" />
                    {i.goalTime} {convertPlayerName(i.spId)}
                  </li>
                );
              })}
              {otherMatchInfo!.shoot.ownGoal !== 0 && (
                <OwnGoalUl>
                  {checkOwnGoal(otherMatchInfo!.shoot.ownGoal).map((i) => {
                    return i;
                  })}
                </OwnGoalUl>
              )}
            </OtherGoalTime>
          </ScoresAndGoalTime>
          <MatchTimeDiv>
            <p>{convertDateAndTime(matchDetail.matchDate)}</p>
          </MatchTimeDiv>
        </MatchScoreAndTimes>

        {/* <Statistics matchDetail={matchDetail} myDataIndex={myDataIndex} selectedUsertStatistics={selectedUsertStatistics} /> */}
        <Statistics myMatchInfo={myMatchInfo!} otherMatchInfo={otherMatchInfo!} />
      </MatchStatisticsContainerDiv>
      <Footer page="MatchStatistics" />
    </>
  );
};

export default MatchStatistics;
