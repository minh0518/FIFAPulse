import React, { useEffect, useState } from 'react';
import {
  DescriptionDiv,
  DescriptionParagraph,
  Icon,
  PlayerSearchSection,
  PositionGuideContainerDiv,
  SeasonList,
  SeasonSelectUl,
} from './PositionGuide.styled';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import PlayerNameInput from '../../Components/PlayerNameInput';
import SelectSeason from '../../Components/SelectSeason';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAData from '../../Services/FifaData';

const PositionGuide = () => {
  const [seasonId, setSeasonId] = useState(0);

  console.log(seasonId);
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
        <PlayerSearchSection>
          <SelectSeason seasonId={seasonId} setSeasonId={setSeasonId} />
          <PlayerNameInput />
        </PlayerSearchSection>
      </PositionGuideContainerDiv>
      <Footer page="PositionGuide" />
    </>
  );
};

export default PositionGuide;
