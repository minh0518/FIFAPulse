import React from 'react';
import { PassProps } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';

const Pass = ({ shortCutPass }: PassProps) => {
  return (
    <div>
      <ul>
        <li>패스 시도 : {shortCutPass().passTry}</li>
        <li>패스 성공 : {shortCutPass().passSuccess}</li>
        <li>
          성공률 : {calculatePercent(shortCutPass().passTry, shortCutPass().passSuccess)}% (
          {`${shortCutPass().passSuccess} / ${shortCutPass().passTry}`})
        </li>
        <ul>
          <li>드리븐 땅볼 패스 시도 : {shortCutPass().drivenGroundPassTry}</li>
          <li>드리븐 땅볼 패스 성공 : {shortCutPass().drivenGroundPassSuccess}</li>
          <li>
            드리븐 땅볼 패스 성공률 : {calculatePercent(shortCutPass().drivenGroundPassTry, shortCutPass().drivenGroundPassSuccess)}% (
            {`${shortCutPass().drivenGroundPassSuccess} / ${shortCutPass().drivenGroundPassTry}`})
          </li>
        </ul>
        <ul>
          <li>로빙 스루 패스 시도 : {shortCutPass().lobbedThroughPassTry}</li>
          <li>로빙 스루 패스 성공 : {shortCutPass().lobbedThroughPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(shortCutPass().lobbedThroughPassTry, shortCutPass().lobbedThroughPassSuccess)}% (
            {`${shortCutPass().lobbedThroughPassSuccess} / ${shortCutPass().lobbedThroughPassTry}`})
          </li>
        </ul>
        <ul>
          <li>롱 패스 시도 : {shortCutPass().longPassTry}</li>
          <li>롱 패스 성공 : {shortCutPass().longPassSuccess}</li>
          <li>
            롱 패스 성공률 : {calculatePercent(shortCutPass().longPassTry, shortCutPass().longPassSuccess)}% (
            {`${shortCutPass().longPassSuccess} / ${shortCutPass().longPassTry}`})
          </li>
        </ul>
        <ul>
          <li>숏 패스 시도 : {shortCutPass().shortPassTry}</li>
          <li>숏 패스 성공 : {shortCutPass().shortPassSuccess}</li>
          <li>
            로빙 스루 패스 성공률 : {calculatePercent(shortCutPass().shortPassTry, shortCutPass().shortPassSuccess)}% (
            {`${shortCutPass().shortPassSuccess} / ${shortCutPass().shortPassTry}`})
          </li>
        </ul>
        <ul>
          <li>스루 패스 시도 : {shortCutPass().throughPassTry}</li>
          <li>스루 패스 성공 : {shortCutPass().throughPassSuccess}</li>
          <li>
            스루 패스 성공률 : {calculatePercent(shortCutPass().throughPassTry, shortCutPass().throughPassSuccess)}% (
            {`${shortCutPass().throughPassSuccess} / ${shortCutPass().throughPassTry}`})
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Pass;
