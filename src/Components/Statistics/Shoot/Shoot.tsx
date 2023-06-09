import React from 'react';
import { ShootProps } from '../../../types/props';
import { calculateGoalTime } from '../../../utils/MatchStatistics';

const Shoot = ({ shortCutShoot, shortCutShootDetail }: ShootProps) => {
  return (
    <div>
      <ul>
        <li>
          골 : {shortCutShoot().goalTotal} {shortCutShoot().ownGoal !== 0 ? <span>자책골{shortCutShoot().ownGoal}</span> : ''}
          <ul>
            <li>패널티 안 : {shortCutShoot().goalInPenalty}</li>
            <li>중거리슛: {shortCutShoot().goalOutPenalty}</li>
            <li>패널티킥 : {shortCutShoot().goalPenaltyKick}</li>
            <li>프리킥 : {shortCutShoot().goalFreekick}</li>
            <li>헤딩 : {shortCutShoot().goalHeading}</li>
          </ul>
        </li>
        <li>
          슈팅 : {shortCutShoot().shootTotal} (유효 슈팅 : {shortCutShoot().effectiveShootTotal})
        </li>
        <ul>
          <li>패널티 안 :{shortCutShoot().shootInPenalty}</li>
          <li>중거리슛 :{shortCutShoot().shootOutPenalty}</li>
          <li>패널티킥 :{shortCutShoot().shootPenaltyKick}</li>
          <li>프리킥 : {shortCutShoot().shootFreekick}</li>
          <li>헤딩 : {shortCutShoot().shootHeading}</li>
        </ul>
      </ul>

      <h3>슈팅 세부 분석</h3>
      {shortCutShootDetail().map((i, index) => {
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
  );
};

export default Shoot;
