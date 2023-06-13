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

  const [myNickName, otherNickName] = [matchDetail.matchInfo[myDataIndex.mine].nickname, matchDetail.matchInfo[myDataIndex.other].nickname];
  const [myController, otherController] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.controller,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.controller,
  ];
  const [myPossession, otherPossession] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.possession,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.possession,
  ];
  const [myCornerKick, otherCornerKick] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.cornerKick,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.cornerKick,
  ];
  const [myDribble, otherDribble] = [
    convertYardtoMeter(matchDetail.matchInfo[myDataIndex.mine].matchDetail.dribble),
    convertYardtoMeter(matchDetail.matchInfo[myDataIndex.other].matchDetail.dribble),
  ];
  const [myFoul, otherFoul] = [matchDetail.matchInfo[myDataIndex.mine].matchDetail.foul, matchDetail.matchInfo[myDataIndex.other].matchDetail.foul];
  const [myYellowCards, otherYellowCards] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.yellowCards,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.yellowCards,
  ];
  const [myRedCards, otherRedCards] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.redCards,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.redCards,
  ];
  const [myInjury, otherInjury] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.injury,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.injury,
  ];
  const [myOffside, otherOffside] = [
    matchDetail.matchInfo[myDataIndex.mine].matchDetail.offsideCount,
    matchDetail.matchInfo[myDataIndex.other].matchDetail.offsideCount,
  ];

  console.log(matchDetail.matchInfo[myDataIndex.mine]);
  console.log(matchDetail.matchInfo[myDataIndex.other]);

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
        name: `${myNickName} ( ${myController} ) `,
        data: [myPossession, myDribble, myCornerKick, myFoul, myOffside, myYellowCards, myRedCards, myInjury],
      },
      {
        name: `${otherNickName} ( ${otherController} )`,
        data: [otherPossession, otherDribble, otherCornerKick, otherFoul, otherOffside, otherYellowCards, otherRedCards, otherInjury],
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
