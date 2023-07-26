import React, { useEffect, useState } from 'react';
import {
  DescriptionDiv,
  DescriptionParagraph,
  Icon,
  PlayerNameAndPostion,
  PositionGuideContainerDiv,
  SearchSection,
  SeasonList,
  SeasonSelectUl,
} from './PositionGuide.styled';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import PlayerNameInput from '../../Components/PlayerNameInput';
import PositionStatistics from '../../Components/PositionStatistics';
import SelectPostition from '../../Components/SelectPostition';
import SelectSeason from '../../Components/SelectSeason';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';

const PositionGuide = () => {
  const [rankerInfo, setRankerInfo] = useState<any[]>([]);
  const [playerListBySeason, setPlayerListBySeason] = useState<string[]>([]);

  const [seasonId, setSeasonId] = useState(0);
  const [confirmedPlayerNameInput, setConfirmedPlayerNameInput] = useState<{ id: number; name: string } | null>(null);
  const [confirmedPositionId, setConfirmedPositionId] = useState<number[]>([]);

  console.log(seasonId, confirmedPlayerNameInput, confirmedPositionId);

  useEffect(() => {
    const getPlayerNameBySeason = () => {
      const spidList = JSON.parse(localStorage.getItem('MetaData_spid')!);
      const spidListFilterbySeason = spidList.filter((i: any) => {
        return Number(String(i.id).split('').slice(0, 3).join('')) === seasonId;
      });
      setPlayerListBySeason(spidListFilterbySeason);
    };

    getPlayerNameBySeason();
  }, [seasonId]);

  useEffect(() => {
    const getRankerInfo = async () => {
      const fifa = new FIFAData();
      const rankerInfo = await Promise.all(
        confirmedPositionId.map((i) => {
          return fifa.getTopRankerPlayerInfo(50, `[{"id":${confirmedPlayerNameInput?.id},"po":${i}}]`);
        }),
      );

      // const rankerInfo = await fifa.getTopRankerPlayerInfo(50, `[{"id":${confirmedPlayerNameInput?.id},"po":${confirmedPositionId}}]`);
      setRankerInfo(rankerInfo);
    };
    if (seasonId !== 0 && confirmedPlayerNameInput && confirmedPositionId?.length) {
      getRankerInfo();
    }
  }, [seasonId, confirmedPlayerNameInput, confirmedPositionId]);

  return (
    <>
      <Navbar page="PositionGuide" />
      <PositionGuideContainerDiv>
        <DescriptionDiv>
          <DescriptionParagraph>
            상위 유저들의 선수 사용 통계를 통해 최적의 포지션을 찾아보세요.
            <br />
            <span>TOP 10,000 랭커 유저가 사용한 선수의 20경기를 바탕으로 제공 됩니다</span>
          </DescriptionParagraph>
        </DescriptionDiv>

        {/* 선수 목록을 전부 가져와서 사용하기엔 너무 양이 많으므로 반드시 시즌을 먼저 선택하게 하고
        이 시즌 id기반으로 정해진 선수만 검색하게 해야 함 */}
        <SearchSection>
          <SelectSeason seasonId={seasonId} setSeasonId={setSeasonId} />
          <PlayerNameAndPostion>
            <PlayerNameInput seasonId={seasonId} setConfirmedPlayerNameInput={setConfirmedPlayerNameInput} playerListBySeason={playerListBySeason} />
            <SelectPostition seasonId={seasonId} confirmedPositionId={confirmedPositionId} setConfirmenPositionId={setConfirmedPositionId} />
          </PlayerNameAndPostion>
        </SearchSection>

        {seasonId !== 0 &&
          confirmedPlayerNameInput &&
          confirmedPositionId.length !== 0 &&
          rankerInfo.length !== 0 &&
          rankerInfo.map((i, index) => {
            return <PositionStatistics key={index} rankerInfo={i[0]} confirmedPositionId={i[0].spPosition} />;
          })}
      </PositionGuideContainerDiv>
      <Footer page="PositionGuide" />
    </>
  );
};

export default PositionGuide;
