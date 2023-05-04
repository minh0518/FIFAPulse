import React from 'react';
import { DefenceProps } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';

const Defence = ({ shortCutDefence }: DefenceProps) => {
  return (
    <div>
      <ul>
        <li>블록 시도 : {shortCutDefence().blockTry}</li>
        <li>블록 성공 : {shortCutDefence().blockSuccess}</li>
        <li>
          블록 성공률 : {calculatePercent(shortCutDefence().blockTry, shortCutDefence().blockSuccess)}% (
          {`${shortCutDefence().blockSuccess} / ${shortCutDefence().blockTry}`})
        </li>
        <li>태클 시도 : {shortCutDefence().tackleTry}</li>
        <li>태클 성공 : {shortCutDefence().tackleSuccess}</li>
        <li>
          태클 성공률 : {calculatePercent(shortCutDefence().tackleTry, shortCutDefence().tackleSuccess)}% (
          {`${shortCutDefence().tackleSuccess} / ${shortCutDefence().tackleTry}`})
        </li>
      </ul>
    </div>
  );
};

export default Defence;
