import React from 'react';
import { Icon, SeasonList, SeasonSelectUl, SelectSeasonContainerDiv } from './SelectSeason.styled';

const SelectSeason = ({ seasonId, setSeasonId }: any) => {
  const seasonImges = JSON.parse(localStorage.getItem('MetaData_seasonId')!);

  const onSeasonImgClick = (seasonId: number) => {
    setSeasonId(seasonId);
  };

  return (
    <SelectSeasonContainerDiv>
      <SeasonSelectUl>
        {seasonImges?.map((i: any) => {
          return (
            <SeasonList
              key={i.className}
              selectedSeasonId={seasonId}
              seasonId={i.seasonId}
              onClick={() => onSeasonImgClick(i.seasonId)}
            >
              {i.className.split('(')[0].trim() === 'ICONTM' ? (
                <Icon>
                  ICONTM
                  <img src={i.seasonImg} alt="" />
                </Icon>
              ) : i.className.split('(')[0].trim() === 'ICON' ? (
                <Icon>
                  ICON
                  <img src={i.seasonImg} alt="" />
                </Icon>
              ) : (
                <img src={i.seasonImg} alt="" />
              )}
            </SeasonList>
          );
        })}
      </SeasonSelectUl>
    </SelectSeasonContainerDiv>
  );
};

export default SelectSeason;
