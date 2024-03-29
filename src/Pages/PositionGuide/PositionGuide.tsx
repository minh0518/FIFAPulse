import React, { useEffect, useState } from 'react';
import {
  PlayerNameAndPostion,
  PositionGuideContainerDiv,
  PositionStatisticsDiv,
  SearchSection,
} from './PositionGuide.styled';
import { DescriptionDiv, DescriptionParagraph } from '../../Common/styles/styles';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import NoResultPositionStatistics from '../../Components/NoResultPositionStatistics';
import PlayerNameInput from '../../Components/PlayerNameInput';
import PositionStatistics from '../../Components/PositionStatistics';
import SelectPostition from '../../Components/SelectPostition';
import SelectSeason from '../../Components/SelectSeason';
import FIFAData from '../../Services/FifaData';
import { filterNoRecords, getMaxInfo } from '../../utils/positionGuide';

const PositionGuide = () => {
  const [rankerInfo, setRankerInfo] = useState<any[]>([]);
  const [playerListBySeason, setPlayerListBySeason] = useState<string[]>([]);

  const [seasonId, setSeasonId] = useState(0);
  const [confirmedPlayerNameInput, setConfirmedPlayerNameInput] = useState<{ id: number; name: string } | null>(null);
  const [confirmedPositionId, setConfirmedPositionId] = useState<number[]>([]);

  const [maxInfo, setMaxInfo] = useState({});

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

  useEffect(() => {
    const updateMaxInfo = () => {
      const filteredRankerInfo = filterNoRecords(rankerInfo);
      if (filteredRankerInfo.length) setMaxInfo(getMaxInfo(filteredRankerInfo));
    };
    if (rankerInfo.length) updateMaxInfo();
  }, [rankerInfo]);

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
            <PlayerNameInput
              seasonId={seasonId}
              setConfirmedPlayerNameInput={setConfirmedPlayerNameInput}
              playerListBySeason={playerListBySeason}
            />
            <SelectPostition
              seasonId={seasonId}
              confirmedPositionId={confirmedPositionId}
              setConfirmenPositionId={setConfirmedPositionId}
            />
          </PlayerNameAndPostion>
        </SearchSection>

        <PositionStatisticsDiv>
          {seasonId !== 0 &&
            confirmedPlayerNameInput &&
            confirmedPositionId.length !== 0 &&
            rankerInfo.length !== 0 &&
            rankerInfo.map((i, index) => {
              if (i[0].createDate === 'Could not found and players of rankers') {
                return <NoResultPositionStatistics errorPositionId={i[0].errorPositionId} key={index} />;
              }

              return (
                <PositionStatistics
                  key={index}
                  rankerInfo={i[0]}
                  confirmedPositionId={i[0].spPosition}
                  maxInfo={maxInfo}
                />
              );
            })}
        </PositionStatisticsDiv>
      </PositionGuideContainerDiv>
      <Footer page="PositionGuide" />
    </>
  );
};

export default PositionGuide;
