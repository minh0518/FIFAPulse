import React, { useState } from 'react';
import Defence from './Defence';
import Pass from './Pass';
import Player from './Player';
import Shoot from './Shoot';
import { MatchStatisticsProps } from '../../types/props';
import { convertYardtoMeter } from '../../utils/MatchStatistics';

const MatchStatistics = ({ matchDetail, myDataIndex, selectedUsertStatistics }: MatchStatisticsProps) => {
  const [statisticsMode, setStatisticsMode] = useState('defence');

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

  const shortCutMathchDetail = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].matchDetail;
  };
  const shortCutDefence = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].defence;
  };
  const shortCutPass = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].pass;
  };
  const shortCutPlayer = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].player;
  };
  const shortCutShoot = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].shoot;
  };
  const shortCutShootDetail = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].shootDetail;
  };
  return (
    <div>
      <div>전체 정보</div>

      <ul>
        {/* <li>선수 평균 평점 : {shortCutMathchDetail().averageRating.toFixed(1)}</li> */}
        <li>사용 컨트롤러 : {shortCutMathchDetail().controller}</li>
        <li>점유율 : {shortCutMathchDetail().possession}%</li>
        <li>코너킥 수 : {shortCutMathchDetail().cornerKick}</li>
        <li>평균 드리블 거리 : {convertYardtoMeter(shortCutMathchDetail().dribble)}m</li>
        <li>파울 : {shortCutMathchDetail().foul}</li>
        <li>옐로 카드 : {shortCutMathchDetail().yellowCards}</li>
        <li>레드 카드 : {shortCutMathchDetail().redCards}</li>
        <li>부상 : {shortCutMathchDetail().injury}</li>
        <li>오프사이드 : {shortCutMathchDetail().offsideCount}</li>
      </ul>

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
          선수
        </button>
      </div>

      {statisticsMode === 'defence' && <Defence shortCutDefence={shortCutDefence} />}
      {statisticsMode === 'pass' && <Pass shortCutPass={shortCutPass} />}
      {statisticsMode === 'shoot' && <Shoot shortCutShoot={shortCutShoot} shortCutShootDetail={shortCutShootDetail} />}
      {statisticsMode === 'player' && <Player shortCutPlayer={shortCutPlayer} />}
    </div>
  );
};

export default MatchStatistics;
