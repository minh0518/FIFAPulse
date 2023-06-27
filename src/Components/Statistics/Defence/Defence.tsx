import React from 'react';
import { DefenceContainerDiv } from './Defence.styled';
import { DefenceProps } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';

const Defence = ({ shortCutDefence }: DefenceProps) => {
  const [mine, ohter] = shortCutDefence();
  return (
    <DefenceContainerDiv>
      <ul>
        <li>블록 시도 : {mine.blockTry}</li>
        <li>블록 성공 : {mine.blockSuccess}</li>
        <li>
          블록 성공률 : {calculatePercent(mine.blockTry, mine.blockSuccess)}% ({`${mine.blockSuccess} / ${mine.blockTry}`})
        </li>
        <li>태클 시도 : {mine.tackleTry}</li>
        <li>태클 성공 : {mine.tackleSuccess}</li>
        <li>
          태클 성공률 : {calculatePercent(mine.tackleTry, mine.tackleSuccess)}% ({`${mine.tackleSuccess} / ${mine.tackleTry}`})
        </li>
      </ul>
      <ul>
        <li>블록 시도 : {ohter.blockTry}</li>
        <li>블록 성공 : {ohter.blockSuccess}</li>
        <li>
          블록 성공률 : {calculatePercent(ohter.blockTry, ohter.blockSuccess)}% ({`${ohter.blockSuccess} / ${ohter.blockTry}`})
        </li>
        <li>태클 시도 : {ohter.tackleTry}</li>
        <li>태클 성공 : {ohter.tackleSuccess}</li>
        <li>
          태클 성공률 : {calculatePercent(ohter.tackleTry, ohter.tackleSuccess)}% ({`${ohter.tackleSuccess} / ${ohter.tackleTry}`})
        </li>
      </ul>
    </DefenceContainerDiv>
  );
};

export default Defence;
