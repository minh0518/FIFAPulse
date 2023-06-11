import React, { useState } from 'react';
import Defence from './Defence';
import Pass from './Pass';
import Player from './Player';
import Shoot from './Shoot';
import {
  DataNotExistDiv,
  DetailStatisticsDiv,
  DetailStatisticsUl,
  OutlineHeading,
  OutlineUl,
  StatisticsContainerDiv,
  StatisticsContentDiv,
} from './Statistics.styled';
import { MatchStatisticsProps } from '../../types/props';
import { convertYardtoMeter } from '../../utils/MatchStatistics';

const Statistics = ({ matchDetail, myDataIndex, selectedUsertStatistics }: MatchStatisticsProps) => {
  const [statisticsMode, setStatisticsMode] = useState('defence');

  console.log(matchDetail.matchInfo[selectedUsertStatistics]);
  console.log(matchDetail.matchInfo[selectedUsertStatistics].matchDetail.matchEndType);

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
    <StatisticsContainerDiv>
      <OutlineHeading>기본 정보</OutlineHeading>

      {matchDetail.matchInfo[selectedUsertStatistics].matchDetail.matchEndType === 2 ? (
        <DataNotExistDiv>몰수패는 데이터가 집계되지 않습니다</DataNotExistDiv>
      ) : (
        <OutlineUl>
          <li>
            <span>사용 컨트롤러 &nbsp; : </span>
            {shortCutMathchDetail().controller}
          </li>
          <li>
            <span>점유율 &nbsp; :</span> {shortCutMathchDetail().possession}%
          </li>
          <li>
            <span>코너킥 수 &nbsp; :</span> {shortCutMathchDetail().cornerKick}
          </li>
          <li>
            <span>평균 드리블 거리 &nbsp; :</span> {convertYardtoMeter(shortCutMathchDetail().dribble)}m
          </li>
          <li>
            <span>파울 &nbsp; : </span>
            {shortCutMathchDetail().foul}
          </li>
          <li>
            <span>카드 ( 옐로 / 레드 ) &nbsp; :</span> ( {shortCutMathchDetail().yellowCards} / {shortCutMathchDetail().redCards} )
          </li>
          <li>
            <span>부상 &nbsp; : </span>
            {shortCutMathchDetail().injury}
          </li>
          <li>
            <span>오프사이드 &nbsp; :</span> {shortCutMathchDetail().offsideCount}
          </li>
        </OutlineUl>
      )}

      <DetailStatisticsDiv>
        <h2>세부 정보</h2>
        <DetailStatisticsUl>
          <li>
            <button type="button" name="defence" onClick={onModeClick} value="defence">
              수비
            </button>
          </li>
          <li>
            <button type="button" name="pass" onClick={onModeClick} value="pass">
              패스
            </button>
          </li>
          <li>
            <button type="button" name="shoot" onClick={onModeClick} value="shoot">
              슈팅
            </button>
          </li>
          <li>
            <button type="button" name="player" onClick={onModeClick} value="player">
              선수
            </button>
          </li>
        </DetailStatisticsUl>

        {matchDetail.matchInfo[selectedUsertStatistics].matchDetail.matchEndType === 2 ? (
          <DataNotExistDiv>몰수패는 데이터가 집계되지 않습니다</DataNotExistDiv>
        ) : (
          <StatisticsContentDiv>
            {statisticsMode === 'defence' && <Defence shortCutDefence={shortCutDefence} />}
            {statisticsMode === 'pass' && <Pass shortCutPass={shortCutPass} />}
            {statisticsMode === 'shoot' && <Shoot shortCutShoot={shortCutShoot} shortCutShootDetail={shortCutShootDetail} />}
            {statisticsMode === 'player' && <Player shortCutPlayer={shortCutPlayer} />}
          </StatisticsContentDiv>
        )}
      </DetailStatisticsDiv>
    </StatisticsContainerDiv>
  );
};

export default Statistics;
