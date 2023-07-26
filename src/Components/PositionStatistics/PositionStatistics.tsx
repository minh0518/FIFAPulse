import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  DetailDiv,
  DetailUl,
  PositionAndMatchCount,
  PositionStatisticsContainerDiv,
  StatisticsDateParagraph,
  StatisticsDiv,
} from './PositionStatistics.styled';
import { convertPosition } from '../../utils/MatchStatistics';
import { convertDate } from '../../utils/MyRecord';

const PositionStatistics = ({ rankerInfo, confirmedPositionId }: any) => {
  const { createDate } = rankerInfo;
  const status = Object.fromEntries(Object.entries(rankerInfo.status).map((i) => [i[0], Number((i[1] as number).toFixed(1))]));

  console.log(confirmedPositionId);

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
            <li>슈팅 횟수 : {status.shoot}</li>
            <li>유효 슈팅 수 : {status.effectiveShoot}</li>
            <li>어시스트 수 : {status.assist}</li>
            <li>득점 수 : {status.goal}</li>
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>드리블</p>
          <DetailUl>
            <li>드리블 시도 수 : {status.dribbleTry}</li>
            <li>드리블 성공 수 : {status.dribbleSuccess}</li>
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>패스</p>
          <DetailUl>
            <li>패스 시도 수 : {status.passTry}</li>
            <li>패스 성공 수 : {status.passSuccess}</li>
          </DetailUl>
        </DetailDiv>
        <DetailDiv>
          <p>수비</p>
          <DetailUl>
            <li>블락 성공 수 : {status.block}</li>
            <li>태클 성공 수 : {status.tackle}</li>
          </DetailUl>
        </DetailDiv>
      </StatisticsDiv>
    </PositionStatisticsContainerDiv>
  );
};

export default PositionStatistics;
