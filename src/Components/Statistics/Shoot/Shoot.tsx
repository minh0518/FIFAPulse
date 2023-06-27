import React from 'react';
import { ShootContainerDiv } from './Shoot.styled';
import { MatchInfos } from '../../../types/props';
import { calculateGoalTime } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Shoot = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myShootData, otherShootData] = [matchInfos[0].shoot, matchInfos[1].shoot];
  const [myShootDetailData, otherShootDetailData] = [matchInfos[0].shootDetail, matchInfos[1].shootDetail];

  return (
    <ShootContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <ul>
            <li>
              골 : {myShootData.goalTotal} {myShootData.ownGoal !== 0 ? <span>자책골{myShootData.ownGoal}</span> : ''}
              <ul>
                <li>패널티 안 : {myShootData.goalInPenalty}</li>
                <li>중거리슛: {myShootData.goalOutPenalty}</li>
                <li>패널티킥 : {myShootData.goalPenaltyKick}</li>
                <li>프리킥 : {myShootData.goalFreekick}</li>
                <li>헤딩 : {myShootData.goalHeading}</li>
              </ul>
            </li>
            <li>
              슈팅 : {myShootData.shootTotal} (유효 슈팅 : {myShootData.effectiveShootTotal})
            </li>
            <ul>
              <li>패널티 안 :{myShootData.shootInPenalty}</li>
              <li>중거리슛 :{myShootData.shootOutPenalty}</li>
              <li>패널티킥 :{myShootData.shootPenaltyKick}</li>
              <li>프리킥 : {myShootData.shootFreekick}</li>
              <li>헤딩 : {myShootData.shootHeading}</li>
            </ul>
          </ul>

          <h3>슈팅 세부 분석</h3>
          {myShootDetailData.map((i, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>시간 : {calculateGoalTime(i.goalTime)}</li>
                  {/* 나머지 정보들은 css와 같이 사용 */}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <ul>
            <li>
              골 : {otherShootData.goalTotal} {otherShootData.ownGoal !== 0 ? <span>자책골{otherShootData.ownGoal}</span> : ''}
              <ul>
                <li>패널티 안 : {otherShootData.goalInPenalty}</li>
                <li>중거리슛: {otherShootData.goalOutPenalty}</li>
                <li>패널티킥 : {otherShootData.goalPenaltyKick}</li>
                <li>프리킥 : {otherShootData.goalFreekick}</li>
                <li>헤딩 : {otherShootData.goalHeading}</li>
              </ul>
            </li>
            <li>
              슈팅 : {otherShootData.shootTotal} (유효 슈팅 : {otherShootData.effectiveShootTotal})
            </li>
            <ul>
              <li>패널티 안 :{otherShootData.shootInPenalty}</li>
              <li>중거리슛 :{otherShootData.shootOutPenalty}</li>
              <li>패널티킥 :{otherShootData.shootPenaltyKick}</li>
              <li>프리킥 : {otherShootData.shootFreekick}</li>
              <li>헤딩 : {otherShootData.shootHeading}</li>
            </ul>
          </ul>

          <h3>슈팅 세부 분석</h3>
          {otherShootDetailData.map((i, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>시간 : {calculateGoalTime(i.goalTime)}</li>
                  {/* 나머지 정보들은 css와 같이 사용 */}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </ShootContainerDiv>
  );
};

export default Shoot;
