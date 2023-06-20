import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Fade, Slide } from 'react-awesome-reveal';
import Defence from './Defence';
import Pass from './Pass';
import Player from './Player';
import Shoot from './Shoot';
import {
  DataNotExistDiv,
  DetailStatisticsDiv,
  DetailStatisticsUl,
  OutlineHeading,
  OutlineUl,
  StatisticsContainerDiv,
  StatisticsContentDiv,
  StyledChart,
} from './Statistics.styled';
import { MatchStatisticsProps } from '../../types/props';
import { convertYardtoMeter } from '../../utils/MatchStatistics';

const Statistics = ({ matchDetail, myDataIndex, selectedUsertStatistics }: MatchStatisticsProps) => {
  const [statisticsMode, setStatisticsMode] = useState('defence');

  const [myMatch, otherMatch] = [matchDetail.matchInfo[myDataIndex.mine], matchDetail.matchInfo[myDataIndex.other]];
  const [myNickName, otherNickName] = [myMatch.nickname, otherMatch.nickname];

  const [myMatchDetail, otherMatchDetail] = [myMatch.matchDetail, otherMatch.matchDetail];
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

  const shortCutMathchDetail = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].matchDetail;
  };
  const shortCutDefence = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].defence;
  };
  const shortCutPass = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].pass;
  };
  const shortCutPlayer = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].player;
  };
  const shortCutShoot = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].shoot;
  };
  const shortCutShootDetail = () => {
    return matchDetail.matchInfo[selectedUsertStatistics].shootDetail;
  };

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
        width: 1,
        colors: ['#fff'],
      },
      // title: {
      //   text: '100% Stacked Bar',
      // },
      xaxis: {
        categories: ['점유율(%)', '평균 드리블 거리(m)', '코너킥', '파울', '오프사이드', '옐로카드', '레드카드', '부상'],
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
            <button type="button" name="defence" onClick={onModeClick} value="defence">
              수비
            </button>
          </li>
          <li>
            <button type="button" name="pass" onClick={onModeClick} value="pass">
              패스
            </button>
          </li>
          <li>
            <button type="button" name="shoot" onClick={onModeClick} value="shoot">
              슈팅
            </button>
          </li>
          <li>
            <button type="button" name="player" onClick={onModeClick} value="player">
              선수
            </button>
          </li>
        </DetailStatisticsUl>

        {matchDetail.matchInfo[selectedUsertStatistics].matchDetail.matchEndType === 2 ? (
          <DataNotExistDiv>몰수패는 데이터가 집계되지 않습니다</DataNotExistDiv>
        ) : (
          <StatisticsContentDiv>
            {statisticsMode === 'defence' && <Defence shortCutDefence={shortCutDefence} />}
            {statisticsMode === 'pass' && <Pass shortCutPass={shortCutPass} />}
            {statisticsMode === 'shoot' && <Shoot shortCutShoot={shortCutShoot} shortCutShootDetail={shortCutShootDetail} />}
            {statisticsMode === 'player' && <Player shortCutPlayer={shortCutPlayer} />}
          </StatisticsContentDiv>
        )}
      </DetailStatisticsDiv>
    </StatisticsContainerDiv>
  );
};

export default Statistics;
