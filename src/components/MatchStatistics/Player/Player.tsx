import React, { useEffect, useState } from 'react';
import PlayerImg from './PlayerImg';
import FIFAData from '../../../Services/FifaData';
import { PlayerProps } from '../../../types/props';

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
                <PlayerImg spId={i.spId} />
                {/* 시즌 이미지 가져오는 api 추가 */}
                {/* 포지션 문자열로 바꿔주는 유틸 함수 추가 */}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Player;
