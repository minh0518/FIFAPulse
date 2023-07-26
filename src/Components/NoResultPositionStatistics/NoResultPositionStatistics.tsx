import React from 'react';
import { NoResultMessage, NoResultPositionStatisticsContainerDiv, PositionAndMatchCount } from './NoResultPositionStatistics.styled';
import { convertPosition } from '../../utils/MatchStatistics';

const NoResultPositionStatistics = ({ errorPositionId }: any) => {
  console.log(errorPositionId);
  return (
    <NoResultPositionStatisticsContainerDiv>
      <PositionAndMatchCount>
        <p>
          포지션 : <b>{convertPosition(errorPositionId)}</b>
        </p>
        <NoResultMessage>해당 포지션에 대한 정보가 존재하지 않습니다</NoResultMessage>
      </PositionAndMatchCount>
    </NoResultPositionStatisticsContainerDiv>
  );
};

export default NoResultPositionStatistics;
