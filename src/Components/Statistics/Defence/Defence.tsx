import React from 'react';
import { DefenceContainerDiv, ForfeitDiv } from './Defence.styled';
import { DefenceProps, MatchInfos } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Defence = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myDefenceData, ohterDefenceData] = [matchInfos[0].defence, matchInfos[1].defence];
  return (
    <DefenceContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          <li>블록 시도 : {myDefenceData.blockTry}</li>
          <li>블록 성공 : {myDefenceData.blockSuccess}</li>
          <li>
            블록 성공률 : {calculatePercent(myDefenceData.blockTry, myDefenceData.blockSuccess)}% (
            {`${myDefenceData.blockSuccess} / ${myDefenceData.blockTry}`})
          </li>
          <li>태클 시도 : {myDefenceData.tackleTry}</li>
          <li>태클 성공 : {myDefenceData.tackleSuccess}</li>
          <li>
            태클 성공률 : {calculatePercent(myDefenceData.tackleTry, myDefenceData.tackleSuccess)}% (
            {`${myDefenceData.tackleSuccess} / ${myDefenceData.tackleTry}`})
          </li>
        </ul>
      )}
      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ul>
          <li>블록 시도 : {ohterDefenceData.blockTry}</li>
          <li>블록 성공 : {ohterDefenceData.blockSuccess}</li>
          <li>
            블록 성공률 : {calculatePercent(ohterDefenceData.blockTry, ohterDefenceData.blockSuccess)}% (
            {`${ohterDefenceData.blockSuccess} / ${ohterDefenceData.blockTry}`})
          </li>
          <li>태클 시도 : {ohterDefenceData.tackleTry}</li>
          <li>태클 성공 : {ohterDefenceData.tackleSuccess}</li>
          <li>
            태클 성공률 : {calculatePercent(ohterDefenceData.tackleTry, ohterDefenceData.tackleSuccess)}% (
            {`${ohterDefenceData.tackleSuccess} / ${ohterDefenceData.tackleTry}`})
          </li>
        </ul>
      )}
    </DefenceContainerDiv>
  );
};

export default Defence;
