import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ShootContainerDiv, StyledChart } from './Shoot.styled';
import SoccerField from './SoccerField';
import { MatchInfos } from '../../../types/props';
import { calculateGoalTime, convertPlayerName, convertPosition, getSeasonImg } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';
import PlayerImg from '../../PlayerImg';

const Shoot = ({ matchInfos }: MatchInfos) => {
  const [myGoalIndex, setMyGoalIndex] = useState(0);
  const [otherGoalIndex, setOtherGoalIndex] = useState(0);

  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myShootData, otherShootData] = [matchInfos[0].shoot, matchInfos[1].shoot];
  const [myShootDetailData, otherShootDetailData] = [matchInfos[0].shootDetail, matchInfos[1].shootDetail];
  const [myPlayerData, otherPlayerData] = [matchInfos[0].player, matchInfos[1].player];

  const [myShootDataForChart, otherShootDataForChart] = [
    [
      myShootData.shootInPenalty,
      myShootData.shootOutPenalty,
      myShootData.shootHeading,
      myShootData.shootFreekick,
      myShootData.shootPenaltyKick,
      myShootData.effectiveShootTotal,
    ],
    [
      otherShootData.shootInPenalty,
      otherShootData.shootOutPenalty,
      otherShootData.shootHeading,
      otherShootData.shootFreekick,
      otherShootData.shootPenaltyKick,
      otherShootData.effectiveShootTotal,
    ],
  ];

  const myChartState = {
    series: [
      {
        name: '페널티 안',
        data: [myShootDataForChart[0], 0],
      },
      {
        name: '페널티 밖',
        data: [myShootDataForChart[1], 0],
      },
      {
        name: '헤딩',
        data: [myShootDataForChart[2], 0],
      },
      {
        name: '프리킥',
        data: [myShootDataForChart[3], 0],
      },
      {
        name: '페널티 킥',
        data: [myShootDataForChart[4], 0],
      },
      {
        name: '유효 슈팅',
        data: [0, myShootDataForChart[5]],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 100,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      // title: {
      //   text: 'Fiction Books Sales',
      // },
      xaxis: {
        categories: ['전체 슈팅', '유효 슈팅'],
        labels: {
          formatter(val: any) {
            return `${val}`;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter(val: any) {
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

  const otherChartState = {
    series: [
      {
        name: '페널티 안',
        data: [otherShootDataForChart[0], 0],
      },
      {
        name: '페널티 밖',
        data: [otherShootDataForChart[1], 0],
      },
      {
        name: '헤딩',
        data: [otherShootDataForChart[2], 0],
      },
      {
        name: '프리킥',
        data: [otherShootDataForChart[3], 0],
      },
      {
        name: '페널티 킥',
        data: [otherShootDataForChart[4], 0],
      },
      {
        name: '유효 슈팅',
        data: [0, otherShootDataForChart[5]],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 100,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      // title: {
      //   text: 'Fiction Books Sales',
      // },
      xaxis: {
        categories: ['전체 슈팅', '유효 슈팅'],
        labels: {
          formatter(val: any) {
            return `${val}`;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter(val: any) {
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

  const [myGoalData, otherGoalData] = [myShootDetailData.filter((i) => i.result === 3), otherShootDetailData.filter((i) => i.result === 3)];

  const onMyGoalTimeClick = (index: number) => {
    setMyGoalIndex(index);
  };
  const onOtherGoalTimeClick = (index: number) => {
    setOtherGoalIndex(index);
  };
  return (
    <ShootContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <StyledChart options={myChartState.options} series={myChartState.series} type="bar" height={250} />

          {/* {myShootData.ownGoal !== 0 ? <span>자책골{myShootData.ownGoal}</span> : ''} */}
        </div>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <StyledChart options={otherChartState.options} series={otherChartState.series} type="bar" height={250} />
          {/* <ul>
            <li>
              골 : {otherShootData.goalTotal} {otherShootData.ownGoal !== 0 ? <span>자책골{otherShootData.ownGoal}</span> : ''}
              <ul>
                <li>패널티 안 : {otherShootData.goalInPenalty}</li>
                <li>중거리슛: {otherShootData.goalOutPenalty}</li>
                <li>패널티킥 : {otherShootData.goalPenaltyKick}</li>
                <li>프리킥 : {otherShootData.goalFreekick}</li>
                <li>헤딩 : {otherShootData.goalHeading}</li>
              </ul>
            </li>
            <li>
              슈팅 : {otherShootData.shootTotal} (유효 슈팅 : {otherShootData.effectiveShootTotal})
            </li>
            <ul>
              <li>패널티 안 :{otherShootData.shootInPenalty}</li>
              <li>중거리슛 :{otherShootData.shootOutPenalty}</li>
              <li>패널티킥 :{otherShootData.shootPenaltyKick}</li>
              <li>프리킥 : {otherShootData.shootFreekick}</li>
              <li>헤딩 : {otherShootData.shootHeading}</li>
            </ul>
          </ul> */}
        </div>
      )}
    </ShootContainerDiv>
  );
};

export default Shoot;
