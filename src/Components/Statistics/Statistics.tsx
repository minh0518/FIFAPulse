import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Fade, Slide } from 'react-awesome-reveal';
import Defence from './Defence';
import Pass from './Pass';
import Player from './Player';
import Shoot from './Shoot';
import {
  CategoryButton,
  DetailStatisticsDiv,
  DetailStatisticsUl,
  OutlineHeading,
  StatisticsContainerDiv,
  StatisticsContentDiv,
  StyledChart,
} from './Statistics.styled';
import { MatchStatisticsProps } from '../../types/props';
import { convertYardtoMeter } from '../../utils/MatchStatistics';

const Statistics = ({ myMatchInfo, otherMatchInfo }: MatchStatisticsProps) => {
  const [statisticsMode, setStatisticsMode] = useState('pass');

  // const [myMatch, otherMatch] = [matchDetail.matchInfo[myDataIndex.mine], matchDetail.matchInfo[myDataIndex.other]];
  const [myNickName, otherNickName] = [myMatchInfo.nickname, otherMatchInfo.nickname];

  const [myMatchDetail, otherMatchDetail] = [myMatchInfo.matchDetail, otherMatchInfo.matchDetail];
  const myMatchDetailBasic = [
    myMatchDetail.possession,
    convertYardtoMeter(myMatchDetail.dribble),
    myMatchDetail.cornerKick,
    myMatchDetail.foul,
    myMatchDetail.offsideCount,
    myMatchDetail.yellowCards,
    myMatchDetail.redCards,
    myMatchDetail.injury,
  ];

  const otherMatchDetailBasic = [
    otherMatchDetail.possession,
    convertYardtoMeter(otherMatchDetail.dribble),
    otherMatchDetail.cornerKick,
    otherMatchDetail.foul,
    otherMatchDetail.offsideCount,
    otherMatchDetail.yellowCards,
    otherMatchDetail.redCards,
    otherMatchDetail.injury,
  ];

  const onModeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    if (name === 'defence') {
      setStatisticsMode(value);
    }
    if (name === 'pass') {
      setStatisticsMode(value);
    }
    if (name === 'shoot') {
      setStatisticsMode(value);
    }
    if (name === 'player') {
      setStatisticsMode(value);
    }
  };

  // const shortCutDefence = () => {
  //   return [myMatch.defence, otherMatch.defence];
  // };
  // const shortCutPass = () => {
  //   return [myMatch.pass, otherMatch.pass];
  // };
  // const shortCutPlayer = () => {
  //   return [myMatch.player, otherMatch.player];
  // };
  // const shortCutShoot = () => {
  //   return [myMatch.shoot, otherMatch.shoot];
  // };
  // const shortCutShootDetail = () => {
  //   return [myMatch.shootDetail, otherMatch.shootDetail];
  // };

  const chartState = {
    series: [
      {
        name: `${myNickName} ( ${myMatchDetail.controller} ) `,
        data: myMatchDetailBasic,
      },
      {
        name: `${otherNickName} ( ${otherMatchDetail.controller} )`,
        data: otherMatchDetailBasic,
      },
    ],

    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        // width: 0,
        // colors: ['#fff'],
      },
      // title: {
      //   text: '100% Stacked Bar',
      // },
      xaxis: {
        categories: ['점유율(%)', '평균 드리블 거리', '코너킥', '파울', '오프사이드', '옐로카드', '레드카드', '부상'],
        labels: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter(val: any, { series, seriesIndex, dataPointIndex, w }: any) {
            if (dataPointIndex === 0) {
              return `${val}%`;
            }
            if (dataPointIndex === 1) {
              return `${val}m`;
            }
            return `${val}회`;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  };

  return (
    <StatisticsContainerDiv>
      <OutlineHeading>기본 정보</OutlineHeading>

      <StyledChart options={chartState.options} series={chartState.series} type="bar" height={500} />

      <DetailStatisticsDiv>
        <h2>세부 정보</h2>
        <DetailStatisticsUl>
          <li>
            <CategoryButton type="button" name="defence" onClick={onModeClick} value="defence" statisticsMode={statisticsMode}>
              수비
            </CategoryButton>
          </li>
          <li>
            <CategoryButton type="button" name="pass" onClick={onModeClick} value="pass" statisticsMode={statisticsMode}>
              패스
            </CategoryButton>
          </li>
          <li>
            <CategoryButton type="button" name="shoot" onClick={onModeClick} value="shoot" statisticsMode={statisticsMode}>
              슈팅
            </CategoryButton>
          </li>
          <li>
            <CategoryButton type="button" name="player" onClick={onModeClick} value="player" statisticsMode={statisticsMode}>
              선수
            </CategoryButton>
          </li>
        </DetailStatisticsUl>

        <StatisticsContentDiv>
          {statisticsMode === 'defence' && <Defence matchInfos={[myMatchInfo, otherMatchInfo]} />}
          {statisticsMode === 'pass' && <Pass matchInfos={[myMatchInfo, otherMatchInfo]} />}
          {statisticsMode === 'shoot' && <Shoot matchInfos={[myMatchInfo, otherMatchInfo]} />}
          {statisticsMode === 'player' && <Player matchInfos={[myMatchInfo, otherMatchInfo]} />}
        </StatisticsContentDiv>
      </DetailStatisticsDiv>
    </StatisticsContainerDiv>
  );
};

export default Statistics;
