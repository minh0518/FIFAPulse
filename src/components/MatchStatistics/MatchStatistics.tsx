import React, { useState } from 'react';
import { MatchStatisticsProps } from '../../types/props';

const MatchStatistics = ({ matchDetail, myDataIndex, selectedUsertStatistics }: MatchStatisticsProps) => {
  const [statisticsMode, setStatisticsMode] = useState('defence');

  // console.log(matchDetail); //새로고침 하면 처음에 null찍히고 값이 나옴
  // (useEffect 되기 전에 화면이 먼저 그려지므로)
  // 그러므로 null인 상태에서 .matchDate를 사용하므로 에러가 발생함

  console.log(matchDetail.matchInfo[selectedUsertStatistics]);

  const onModeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    if (name === 'defence') {
      setStatisticsMode(value);
    }
    if (name === 'pass') {
      setStatisticsMode(value);
    }
    if (name === 'shoot') {
      setStatisticsMode(value);
    }
    if (name === 'player') {
      setStatisticsMode(value);
    }
  };

  return (
    <div>
      <div>전체 정보</div>

      <div>
        <button type="button" name="defence" onClick={onModeClick} value="defence">
          수비
        </button>
        <button type="button" name="pass" onClick={onModeClick} value="pass">
          패스
        </button>
        <button type="button" name="shoot" onClick={onModeClick} value="shoot">
          슈팅
        </button>
        <button type="button" name="player" onClick={onModeClick} value="player">
          각 선수 세부 기록
        </button>
      </div>
    </div>
  );
};

export default MatchStatistics;
