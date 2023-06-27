import React from 'react';
import { PassContainerDiv } from './Pass.styled';
import { PassProps } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';

const Pass = ({ shortCutPass }: PassProps) => {
  const [mine, other] = shortCutPass();
  return (
    <PassContainerDiv>
      <ul>
        <li>패스 시도 : {mine.passTry}</li>
        <li>패스 성공 : {mine.passSuccess}</li>
        <li>
          성공률 : {calculatePercent(mine.passTry, mine.passSuccess)}% ({`${mine.passSuccess} / ${mine.passTry}`})
        </li>
        <ul>
          <li>드리븐 땅볼 패스 시도 : {mine.drivenGroundPassTry}</li>
          <li>드리븐 땅볼 패스 성공 : {mine.drivenGroundPassSuccess}</li>
          <li>
            드리븐 땅볼 패스 성공률 : {calculatePercent(mine.drivenGroundPassTry, mine.drivenGroundPassSuccess)}% (
            {`${mine.drivenGroundPassSuccess} / ${mine.drivenGroundPassTry}`})
          </li>
        </ul>
        <ul>
          <li>로빙 스루 패스 시도 : {mine.lobbedThroughPassTry}</li>
          <li>로빙 스루 패스 성공 : {mine.lobbedThroughPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(mine.lobbedThroughPassTry, mine.lobbedThroughPassSuccess)}% (
            {`${mine.lobbedThroughPassSuccess} / ${mine.lobbedThroughPassTry}`})
          </li>
        </ul>
        <ul>
          <li>롱 패스 시도 : {mine.longPassTry}</li>
          <li>롱 패스 성공 : {mine.longPassSuccess}</li>
          <li>
            롱 패스 성공률 : {calculatePercent(mine.longPassTry, mine.longPassSuccess)}% ({`${mine.longPassSuccess} / ${mine.longPassTry}`})
          </li>
        </ul>
        <ul>
          <li>숏 패스 시도 : {mine.shortPassTry}</li>
          <li>숏 패스 성공 : {mine.shortPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(mine.shortPassTry, mine.shortPassSuccess)}% ({`${mine.shortPassSuccess} / ${mine.shortPassTry}`}
            )
          </li>
        </ul>
        <ul>
          <li>스루 패스 시도 : {mine.throughPassTry}</li>
          <li>스루 패스 성공 : {mine.throughPassSuccess}</li>
          <li>
            스루 패스 성공률 : {calculatePercent(mine.throughPassTry, mine.throughPassSuccess)}% (
            {`${mine.throughPassSuccess} / ${mine.throughPassTry}`})
          </li>
        </ul>
      </ul>
      <ul>
        <li>패스 시도 : {other.passTry}</li>
        <li>패스 성공 : {other.passSuccess}</li>
        <li>
          성공률 : {calculatePercent(other.passTry, other.passSuccess)}% ({`${other.passSuccess} / ${other.passTry}`})
        </li>
        <ul>
          <li>드리븐 땅볼 패스 시도 : {other.drivenGroundPassTry}</li>
          <li>드리븐 땅볼 패스 성공 : {other.drivenGroundPassSuccess}</li>
          <li>
            드리븐 땅볼 패스 성공률 : {calculatePercent(other.drivenGroundPassTry, other.drivenGroundPassSuccess)}% (
            {`${other.drivenGroundPassSuccess} / ${other.drivenGroundPassTry}`})
          </li>
        </ul>
        <ul>
          <li>로빙 스루 패스 시도 : {other.lobbedThroughPassTry}</li>
          <li>로빙 스루 패스 성공 : {other.lobbedThroughPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(other.lobbedThroughPassTry, other.lobbedThroughPassSuccess)}% (
            {`${other.lobbedThroughPassSuccess} / ${other.lobbedThroughPassTry}`})
          </li>
        </ul>
        <ul>
          <li>롱 패스 시도 : {other.longPassTry}</li>
          <li>롱 패스 성공 : {other.longPassSuccess}</li>
          <li>
            롱 패스 성공률 : {calculatePercent(other.longPassTry, other.longPassSuccess)}% ({`${other.longPassSuccess} / ${other.longPassTry}`})
          </li>
        </ul>
        <ul>
          <li>숏 패스 시도 : {other.shortPassTry}</li>
          <li>숏 패스 성공 : {other.shortPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(other.shortPassTry, other.shortPassSuccess)}% (
            {`${other.shortPassSuccess} / ${other.shortPassTry}`})
          </li>
        </ul>
        <ul>
          <li>스루 패스 시도 : {other.throughPassTry}</li>
          <li>스루 패스 성공 : {other.throughPassSuccess}</li>
          <li>
            스루 패스 성공률 : {calculatePercent(other.throughPassTry, other.throughPassSuccess)}% (
            {`${other.throughPassSuccess} / ${other.throughPassTry}`})
          </li>
        </ul>
      </ul>
    </PassContainerDiv>
  );
};

export default Pass;
