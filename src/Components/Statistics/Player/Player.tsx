import React, { useEffect, useState } from 'react';
import { PlayerContainerDiv } from './Player.styled';
import WhoScored from './WhoScored';
import FIFAData from '../../../Services/FifaData';
import { MatchInfos } from '../../../types/props';
import { convertPlayerName, convertPosition, convertYardtoMeter, getSeasonImg } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';
import PlayerImg from '../../PlayerImg';

const Player = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];

  // readonly로 설정되어 있으므로 원본을 변경하는 sort를 사용하기 위해 복사해서 사용
  const [myPlayerData, ohterPlayerData] = [[...matchInfos[0].player], [...matchInfos[1].player]];

  // console.log(myMatchData);
  // console.log(myPlayerData);

  return (
    <PlayerContainerDiv>
      <WhoScored matchInfos={matchInfos} />
      {/* {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          {myPlayerData
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
                    볼 소유 시도 :{' '}
                    {i.status.ballPossesionTry !== 0 ? Math.floor((i.status.ballPossesionSuccess / i.status.ballPossesionTry) * 100) : 0}% (
                    {`${i.status.ballPossesionTry}/${i.status.ballPossesionSuccess}`})
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
      )}
      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          {ohterPlayerData
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
                    볼 소유 시도 :{' '}
                    {i.status.ballPossesionTry !== 0 ? Math.floor((i.status.ballPossesionSuccess / i.status.ballPossesionTry) * 100) : 0}% (
                    {`${i.status.ballPossesionTry}/${i.status.ballPossesionSuccess}`})
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
      )} */}
    </PlayerContainerDiv>
  );
};

export default Player;
