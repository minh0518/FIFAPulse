import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MatchStatistics from '../../Components/MatchStatistics';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';
import { MatchDetail } from '../../types/api';
import { myDataIndex, selectedUsertStatistics } from '../../types/states';

const MatchResultWithMatchStatistics = () => {
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

  const showResultWithScore = (index: 0 | 1): React.ReactNode => {
    if (matchDetail?.matchInfo[index].matchDetail.matchEndType === 1) {
      return <h2>몰수 승</h2>;
    }

    if (matchDetail?.matchInfo[index].matchDetail.matchEndType === 2) {
      return <h2>몰수 패</h2>;
    }
    return <h2>{matchDetail?.matchInfo[index].shoot.goalTotalDisplay}</h2>;
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={() => onUserNicknameClick('mine')}>
          {matchDetail?.matchInfo[myDataIndex!.mine].nickname}
        </button>
        <h1>vs</h1>
        <button type="button" onClick={() => onUserNicknameClick('other')}>
          {matchDetail?.matchInfo[myDataIndex!.other].nickname}
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        {/* {matchDetail?.matchInfo[myDataIndex!.mine].matchDetail.matchEndType === 0 ? (
          <h2>{matchDetail?.matchInfo[myDataIndex!.mine].shoot.goalTotalDisplay}</h2>
        ) : matchDetail?.matchInfo[myDataIndex!.mine].matchDetail.matchEndType === 1 ? (
          <h2>몰수 승</h2>
        ) : (
          <h2>몰수 패</h2>
        )} */}
        {myDataIndex && showResultWithScore(myDataIndex.mine)}

        <h2> : </h2>

        {/* {matchDetail?.matchInfo[myDataIndex!.other].matchDetail.matchEndType === 0 ? (
          <h2>{matchDetail?.matchInfo[myDataIndex!.other].shoot.goalTotalDisplay}</h2>
        ) : matchDetail?.matchInfo[myDataIndex!.other].matchDetail.matchEndType === 1 ? (
          <h2>몰수 승</h2>
        ) : (
          <h2>몰수 패</h2>
        )} */}
        {myDataIndex && showResultWithScore(myDataIndex.other)}
      </div>

      {matchDetail && myDataIndex && (
        <MatchStatistics matchDetail={matchDetail} myDataIndex={myDataIndex} selectedUsertStatistics={selectedUsertStatistics} />
      )}
    </div>
  );
};

export default MatchResultWithMatchStatistics;
