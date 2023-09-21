import React, { useEffect } from 'react';
import {
  PostitionList,
  PostitionUl,
  SelectCountMessageParagraph,
  SelectPostitionContainerDiv,
} from './SelectPostition.styled';

const SelectPostition = ({ seasonId, confirmedPositionId, setConfirmenPositionId }: any) => {
  const positionListArr = JSON.parse(localStorage.getItem('MetaData_spPosition')!);

  useEffect(() => {
    const checkChangeSeasonId = () => {
      setConfirmenPositionId([]);
    };

    checkChangeSeasonId();
  }, [seasonId]);

  const onPostitionClick = (positionId: number) => {
    if (seasonId !== 0) {
      const prevArr = [...confirmedPositionId];

      const alreadyExistIndex = prevArr.indexOf(positionId);
      if (alreadyExistIndex !== -1) {
        prevArr.splice(alreadyExistIndex, 1);
        setConfirmenPositionId([...prevArr]);
        return;
      }
      if (confirmedPositionId.length < 4) {
        setConfirmenPositionId([...prevArr, positionId]);
      }
      if (confirmedPositionId.length >= 4) {
        setConfirmenPositionId([...prevArr.slice(1), positionId]);
      }
    }
  };

  return (
    <SelectPostitionContainerDiv>
      <PostitionUl>
        {positionListArr
          .slice(0, positionListArr.length - 1)
          .map((i: { spposition: number; desc: string }, index: number) => {
            return (
              <PostitionList
                key={index}
                onClick={() => onPostitionClick(i.spposition)}
                confirmedPositionId={confirmedPositionId}
                postionId={i.spposition}
              >
                {i.desc}
              </PostitionList>
            );
          })}
      </PostitionUl>
      <SelectCountMessageParagraph>최대 4개까지 선택 가능</SelectCountMessageParagraph>
    </SelectPostitionContainerDiv>
  );
};

export default SelectPostition;
