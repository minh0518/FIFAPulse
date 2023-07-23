import React, { useEffect, useState } from 'react';
import { Icon, SeasonList, SeasonSelectUl } from './SelectSeason.styled';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';

const SelectSeason = ({ seasonId, setSeasonId }: any) => {
  const [rankerInfo, setRankerInfo] = useState<any | null>(null);
  const { userObj, setUserObj } = useUserObjAPI()!;

  useEffect(() => {
    const getRankerInfo = async () => {
      const fifa = new FIFAData();
      const rankerInfo = await fifa.getTopRankerPlayerInfo(50, `[{"id":278165153,"po":18},{"id":287239053,"po":11}]`);
      setRankerInfo(rankerInfo);
    };

    getRankerInfo();
  }, []);

  const seasonImges = JSON.parse(localStorage.getItem('MetaData_seasonId')!);

  const onSeasonImgClick = (seasonId: number) => {
    setSeasonId(seasonId);
  };

  return (
    <SeasonSelectUl>
      {seasonImges?.map((i: any) => {
        return (
          <SeasonList key={i.className} selectedSeasonId={seasonId} seasonId={i.seasonId} onClick={() => onSeasonImgClick(i.seasonId)}>
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
  );
};

export default SelectSeason;
