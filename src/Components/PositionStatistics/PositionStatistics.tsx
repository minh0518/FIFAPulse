import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  DetailDiv,
  DetailList,
  DetailUl,
  PositionAndMatchCount,
  PositionStatisticsContainerDiv,
  StatisticsDateParagraph,
  StatisticsDiv,
} from './PositionStatistics.styled';
import { convertPosition } from '../../utils/MatchStatistics';
import { convertDate } from '../../utils/MyRecord';

const PositionStatistics = ({ rankerInfo, confirmedPositionId, maxInfo }: any) => {
  const { createDate } = rankerInfo;
  const status = Object.fromEntries(Object.entries(rankerInfo.status).map((i) => [i[0], i[1] as number]));

  const attackStat = [
    { type: 'shoot', stat: status.shoot, desc: '슈팅 횟수' },
    { type: 'effectiveShoot', stat: status.effectiveShoot, desc: '유효 슈팅 수' },
    { type: 'assist', stat: status.assist, desc: '어시스트' },
    { type: 'goal', stat: status.goal, desc: '득점' },
  ];
  const dribbleStat = [
    { type: 'dribbleTry', stat: status.dribbleTry, desc: '드리블 시도' },
    { type: 'dribbleSuccess', stat: status.dribbleSuccess, desc: '드리블 성공' },
  ];

  const passStat = [
    { type: 'passTry', stat: status.passTry, desc: '패스 시도' },
    { type: 'passSuccess', stat: status.passSuccess, desc: '패스 성공' },
  ];
  const defenceStat = [
    { type: 'block', stat: status.block, desc: '블록 성공' },
    { type: 'tackle', stat: status.tackle, desc: '태클 성공' },
  ];

  // 현재 선수 정보에 최댓값이 존재하는 지 확인
  type currentMaxStatObjType = {
    [key: string]: number;
  };
  const currentMaxStatObj: currentMaxStatObjType = {};
  Object.entries(maxInfo).forEach((i) => {
    const stat = i[0];
    const maxValue = i[1];
    if (status[stat] === maxValue) {
      currentMaxStatObj[stat] = maxValue;
    }
  });

  return (
    <PositionStatisticsContainerDiv>
      <StatisticsDateParagraph>데이터 갱신 일자 : {convertDate(createDate)}</StatisticsDateParagraph>
      <PositionAndMatchCount>
        <p>
          포지션 : <b>{convertPosition(confirmedPositionId)}</b>
        </p>
        <p>매치 표본 경기 횟수 : {status.matchCount}</p>
      </PositionAndMatchCount>
      <StatisticsDiv>
        <DetailDiv>
          <p>공격</p>
          <DetailUl>
            {attackStat.map((i, index) => {
              return (
                <DetailList key={index} isMax={!!currentMaxStatObj[i.type]}>
                  {i.desc} : {Number(i.stat).toFixed(1)}
                </DetailList>
              );
            })}
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>드리블</p>
          <DetailUl>
            {dribbleStat.map((i, index) => {
              return (
                <DetailList key={index} isMax={!!currentMaxStatObj[i.type]}>
                  {i.desc} : {Number(i.stat).toFixed(1)}
                </DetailList>
              );
            })}
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>패스</p>
          <DetailUl>
            {passStat.map((i, index) => {
              return (
                <DetailList key={index} isMax={!!currentMaxStatObj[i.type]}>
                  {i.desc} : {Number(i.stat).toFixed(1)}
                </DetailList>
              );
            })}
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>수비</p>
          <DetailUl>
            {defenceStat.map((i, index) => {
              return (
                <DetailList key={index} isMax={!!currentMaxStatObj[i.type]}>
                  {i.desc} : {Number(i.stat).toFixed(1)}
                </DetailList>
              );
            })}
          </DetailUl>
        </DetailDiv>
      </StatisticsDiv>
    </PositionStatisticsContainerDiv>
  );
};

export default PositionStatistics;
