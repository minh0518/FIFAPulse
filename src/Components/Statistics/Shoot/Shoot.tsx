import React from 'react';
import { ShootContainerDiv } from './Shoot.styled';
import { ShootProps } from '../../../types/props';
import { calculateGoalTime } from '../../../utils/MatchStatistics';

const Shoot = ({ shortCutShoot, shortCutShootDetail }: ShootProps) => {
  const [mineShoot, otherShoot] = shortCutShoot();
  const [mineShootDetail, otherShootDetail] = shortCutShootDetail();
  return (
    <ShootContainerDiv>
      <div>
        <ul>
          <li>
            골 : {mineShoot.goalTotal} {mineShoot.ownGoal !== 0 ? <span>자책골{mineShoot.ownGoal}</span> : ''}
            <ul>
              <li>패널티 안 : {mineShoot.goalInPenalty}</li>
              <li>중거리슛: {mineShoot.goalOutPenalty}</li>
              <li>패널티킥 : {mineShoot.goalPenaltyKick}</li>
              <li>프리킥 : {mineShoot.goalFreekick}</li>
              <li>헤딩 : {mineShoot.goalHeading}</li>
            </ul>
          </li>
          <li>
            슈팅 : {mineShoot.shootTotal} (유효 슈팅 : {mineShoot.effectiveShootTotal})
          </li>
          <ul>
            <li>패널티 안 :{mineShoot.shootInPenalty}</li>
            <li>중거리슛 :{mineShoot.shootOutPenalty}</li>
            <li>패널티킥 :{mineShoot.shootPenaltyKick}</li>
            <li>프리킥 : {mineShoot.shootFreekick}</li>
            <li>헤딩 : {mineShoot.shootHeading}</li>
          </ul>
        </ul>

        <h3>슈팅 세부 분석</h3>
        {mineShootDetail.map((i, index) => {
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
      <div>
        <ul>
          <li>
            골 : {otherShoot.goalTotal} {otherShoot.ownGoal !== 0 ? <span>자책골{otherShoot.ownGoal}</span> : ''}
            <ul>
              <li>패널티 안 : {otherShoot.goalInPenalty}</li>
              <li>중거리슛: {otherShoot.goalOutPenalty}</li>
              <li>패널티킥 : {otherShoot.goalPenaltyKick}</li>
              <li>프리킥 : {otherShoot.goalFreekick}</li>
              <li>헤딩 : {otherShoot.goalHeading}</li>
            </ul>
          </li>
          <li>
            슈팅 : {otherShoot.shootTotal} (유효 슈팅 : {otherShoot.effectiveShootTotal})
          </li>
          <ul>
            <li>패널티 안 :{otherShoot.shootInPenalty}</li>
            <li>중거리슛 :{otherShoot.shootOutPenalty}</li>
            <li>패널티킥 :{otherShoot.shootPenaltyKick}</li>
            <li>프리킥 : {otherShoot.shootFreekick}</li>
            <li>헤딩 : {otherShoot.shootHeading}</li>
          </ul>
        </ul>

        <h3>슈팅 세부 분석</h3>
        {otherShootDetail.map((i, index) => {
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
    </ShootContainerDiv>
  );
};

export default Shoot;
