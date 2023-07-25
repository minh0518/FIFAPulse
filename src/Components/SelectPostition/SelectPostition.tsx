import React, { useEffect, useState } from 'react';
import { PostitionList, PostitionUl, SelectPostitionContainerDiv } from './SelectPostition.styled';

const SelectPostition = ({ seasonId, setConfirmenPositionId }: any) => {
  const [selectedPositionId, setSelectedPositionId] = useState<number | null>(null);

  const positionListArr = JSON.parse(localStorage.getItem('MetaData_spPosition')!);

  const onClickPositionList = (postionId: number | null) => {
    setSelectedPositionId(postionId);
  };

  useEffect(() => {
    const checkChangeSeasonId = () => {
      setSelectedPositionId(null);
      setConfirmenPositionId(null);
    };

    checkChangeSeasonId();
  }, [seasonId]);

  const onPostitionClick = (positionId: number) => {
    if (seasonId !== 0) {
      onClickPositionList(positionId);
      setConfirmenPositionId(positionId);
    }
  };

  return (
    <SelectPostitionContainerDiv>
      <PostitionUl>
        {positionListArr.slice(0, positionListArr.length - 1).map((i: { spposition: number; desc: string }, index: number) => {
          return (
            <PostitionList
              key={index}
              onClick={() => onPostitionClick(i.spposition)}
              selectedPositionId={selectedPositionId}
              postionId={i.spposition}
            >
              {i.desc}
            </PostitionList>
          );
        })}
      </PostitionUl>
    </SelectPostitionContainerDiv>
  );
};

export default SelectPostition;
