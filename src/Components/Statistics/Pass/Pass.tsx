import React from 'react';
import { PassContainerDiv } from './Pass.styled';
import { MatchInfos, PassProps } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Pass = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myPassData, otherPassData] = [matchInfos[0].pass, matchInfos[1].pass];
  return (
    <PassContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          <li>패스 시도 : {myPassData.passTry}</li>
          <li>패스 성공 : {myPassData.passSuccess}</li>
          <li>
            성공률 : {calculatePercent(myPassData.passTry, myPassData.passSuccess)}% ({`${myPassData.passSuccess} / ${myPassData.passTry}`})
          </li>
          <ul>
            <li>드리븐 땅볼 패스 시도 : {myPassData.drivenGroundPassTry}</li>
            <li>드리븐 땅볼 패스 성공 : {myPassData.drivenGroundPassSuccess}</li>
            <li>
              드리븐 땅볼 패스 성공률 : {calculatePercent(myPassData.drivenGroundPassTry, myPassData.drivenGroundPassSuccess)}% (
              {`${myPassData.drivenGroundPassSuccess} / ${myPassData.drivenGroundPassTry}`})
            </li>
          </ul>
          <ul>
            <li>로빙 스루 패스 시도 : {myPassData.lobbedThroughPassTry}</li>
            <li>로빙 스루 패스 성공 : {myPassData.lobbedThroughPassSuccess}</li>
            <li>
              로빙 스루 패스 성공률 : {calculatePercent(myPassData.lobbedThroughPassTry, myPassData.lobbedThroughPassSuccess)}% (
              {`${myPassData.lobbedThroughPassSuccess} / ${myPassData.lobbedThroughPassTry}`})
            </li>
          </ul>
          <ul>
            <li>롱 패스 시도 : {myPassData.longPassTry}</li>
            <li>롱 패스 성공 : {myPassData.longPassSuccess}</li>
            <li>
              롱 패스 성공률 : {calculatePercent(myPassData.longPassTry, myPassData.longPassSuccess)}% (
              {`${myPassData.longPassSuccess} / ${myPassData.longPassTry}`})
            </li>
          </ul>
          <ul>
            <li>숏 패스 시도 : {myPassData.shortPassTry}</li>
            <li>숏 패스 성공 : {myPassData.shortPassSuccess}</li>
            <li>
              로빙 스루 패스 성공률 : {calculatePercent(myPassData.shortPassTry, myPassData.shortPassSuccess)}% (
              {`${myPassData.shortPassSuccess} / ${myPassData.shortPassTry}`})
            </li>
          </ul>
          <ul>
            <li>스루 패스 시도 : {myPassData.throughPassTry}</li>
            <li>스루 패스 성공 : {myPassData.throughPassSuccess}</li>
            <li>
              스루 패스 성공률 : {calculatePercent(myPassData.throughPassTry, myPassData.throughPassSuccess)}% (
              {`${myPassData.throughPassSuccess} / ${myPassData.throughPassTry}`})
            </li>
          </ul>
        </ul>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          <li>패스 시도 : {otherPassData.passTry}</li>
          <li>패스 성공 : {otherPassData.passSuccess}</li>
          <li>
            성공률 : {calculatePercent(otherPassData.passTry, otherPassData.passSuccess)}% (
            {`${otherPassData.passSuccess} / ${otherPassData.passTry}`})
          </li>
          <ul>
            <li>드리븐 땅볼 패스 시도 : {otherPassData.drivenGroundPassTry}</li>
            <li>드리븐 땅볼 패스 성공 : {otherPassData.drivenGroundPassSuccess}</li>
            <li>
              드리븐 땅볼 패스 성공률 : {calculatePercent(otherPassData.drivenGroundPassTry, otherPassData.drivenGroundPassSuccess)}% (
              {`${otherPassData.drivenGroundPassSuccess} / ${otherPassData.drivenGroundPassTry}`})
            </li>
          </ul>
          <ul>
            <li>로빙 스루 패스 시도 : {otherPassData.lobbedThroughPassTry}</li>
            <li>로빙 스루 패스 성공 : {otherPassData.lobbedThroughPassSuccess}</li>
            <li>
              로빙 스루 패스 성공률 : {calculatePercent(otherPassData.lobbedThroughPassTry, otherPassData.lobbedThroughPassSuccess)}% (
              {`${otherPassData.lobbedThroughPassSuccess} / ${otherPassData.lobbedThroughPassTry}`})
            </li>
          </ul>
          <ul>
            <li>롱 패스 시도 : {otherPassData.longPassTry}</li>
            <li>롱 패스 성공 : {otherPassData.longPassSuccess}</li>
            <li>
              롱 패스 성공률 : {calculatePercent(otherPassData.longPassTry, otherPassData.longPassSuccess)}% (
              {`${otherPassData.longPassSuccess} / ${otherPassData.longPassTry}`})
            </li>
          </ul>
          <ul>
            <li>숏 패스 시도 : {otherPassData.shortPassTry}</li>
            <li>숏 패스 성공 : {otherPassData.shortPassSuccess}</li>
            <li>
              로빙 스루 패스 성공률 : {calculatePercent(otherPassData.shortPassTry, otherPassData.shortPassSuccess)}% (
              {`${otherPassData.shortPassSuccess} / ${otherPassData.shortPassTry}`})
            </li>
          </ul>
          <ul>
            <li>스루 패스 시도 : {otherPassData.throughPassTry}</li>
            <li>스루 패스 성공 : {otherPassData.throughPassSuccess}</li>
            <li>
              스루 패스 성공률 : {calculatePercent(otherPassData.throughPassTry, otherPassData.throughPassSuccess)}% (
              {`${otherPassData.throughPassSuccess} / ${otherPassData.throughPassTry}`})
            </li>
          </ul>
        </ul>
      )}
    </PassContainerDiv>
  );
};

export default Pass;
