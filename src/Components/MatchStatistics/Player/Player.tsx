import React, { useEffect, useState } from 'react';
import PlayerImg from './PlayerImg';
import FIFAData from '../../../Services/FifaData';
import { PlayerProps } from '../../../types/props';
import { convertPlayerName, convertPosition, convertYardtoMeter, getSeasonImg } from '../../../utils/MatchStatistics';

// 후스코어처럼 선수 포메이션 형태 구현하고 거기에 hover하면 각종 정보들 보여주는 식으로?
const Player = ({ shortCutPlayer }: PlayerProps) => {
  return (
    <div>
      <ul>
        {shortCutPlayer()
          .sort((a, b) => a.spPosition - b.spPosition)
          .filter((i) => {
            return i.spPosition !== 28;
          })
          .map((i, index) => {
            return (
              <li key={index}>
                <div>
                  <PlayerImg spId={i.spId} width={100} height={100} />
                  {convertPosition(i.spPosition)}
                  <img src={getSeasonImg(i.spId)} alt="시즌 이미지" />
                  {convertPlayerName(i.spId)}
                </div>
                <p>평점 : {i.status.spRating}</p>
                {i.status.goal !== 0 && (
                  <p>
                    <b>골 : {i.status.goal}</b>
                  </p>
                )}
                {i.status.assist !== 0 && (
                  <p>
                    <b>도움 : {i.status.assist}</b>
                  </p>
                )}
                <p>
                  드리블 : {i.status.dribbleTry !== 0 ? Math.floor((i.status.dribbleSuccess / i.status.dribbleTry) * 100) : 0}% (
                  {`${i.status.dribbleTry}/${i.status.dribbleSuccess}`})
                </p>
                <p>
                  패스 : {i.status.passTry !== 0 ? Math.floor((i.status.passSuccess / i.status.passTry) * 100) : 0}% (
                  {`${i.status.passTry}/${i.status.passSuccess}`})
                </p>
                <p>
                  슛 (유효): {i.status.shoot} ({i.status.effectiveShoot})
                </p>
                <p>
                  공중볼 경합 : {i.status.aerialTry !== 0 ? Math.floor((i.status.aerialSuccess / i.status.aerialTry) * 100) : 0}% (
                  {`${i.status.aerialTry}/${i.status.aerialSuccess}`})
                </p>
                <p>
                  슬라이딩 태클 : {i.status.tackleTry !== 0 ? Math.floor((i.status.tackle / i.status.tackleTry) * 100) : 0}% (
                  {`${i.status.tackleTry}/${i.status.tackle}`})
                </p>
                <p>
                  볼 소유 시도 : {i.status.ballPossesionTry !== 0 ? Math.floor((i.status.ballPossesionSuccess / i.status.ballPossesionTry) * 100) : 0}
                  % ({`${i.status.ballPossesionTry}/${i.status.ballPossesionSuccess}`})
                </p>
                <p>
                  블락 : {i.status.blockTry !== 0 ? Math.floor((i.status.block / i.status.blockTry) * 100) : 0}% (
                  {`${i.status.blockTry}/${i.status.block}`})
                </p>
                <p>인터셉트 : {i.status.intercept}회</p>

                {i.status.yellowCards !== 0 && (
                  <p>
                    <b>옐로카드 : {i.status.yellowCards}</b>
                  </p>
                )}
                {i.status.redCards !== 0 && (
                  <p>
                    <b>레드카드 : {i.status.redCards}</b>
                  </p>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Player;
