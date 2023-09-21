import React from 'react';
import { PassChartDiv, PassContainerDiv, StyledChart } from './Pass.styled';
import { MatchInfos } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Pass = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myPassData, otherPassData] = [matchInfos[0].pass, matchInfos[1].pass];
  // '전체', '롱패스', '숏패스', '스루패스', '로빙스루', '드리븐'
  const [myPassTry, myPassSuccess] = [
    [
      myPassData.passTry,
      myPassData.longPassTry,
      myPassData.shortPassTry,
      myPassData.throughPassTry,
      myPassData.lobbedThroughPassTry,
      myPassData.drivenGroundPassTry,
    ],
    [
      myPassData.passSuccess,
      myPassData.longPassSuccess,
      myPassData.shortPassSuccess,
      myPassData.throughPassSuccess,
      myPassData.lobbedThroughPassSuccess,
      myPassData.drivenGroundPassSuccess,
    ],
  ];

  const [otherPassTry, otherPassSuccess] = [
    [
      otherPassData.passTry,
      otherPassData.longPassTry,
      otherPassData.shortPassTry,
      otherPassData.throughPassTry,
      otherPassData.lobbedThroughPassTry,
      otherPassData.drivenGroundPassTry,
    ],
    [
      otherPassData.passSuccess,
      otherPassData.longPassSuccess,
      otherPassData.shortPassSuccess,
      otherPassData.throughPassSuccess,
      otherPassData.lobbedThroughPassSuccess,
      otherPassData.drivenGroundPassSuccess,
    ],
  ];

  const myChartState = {
    series: [
      {
        name: 'Income',
        type: 'column',
        data: myPassTry,
      },
      {
        name: 'success',
        type: 'column',
        data: myPassSuccess,
      },
    ],
    options: {
      chart: {
        height: 500,
        type: 'line',
        stacked: false,
      },
      fill: {
        colors: ['#0A94FB', '#253592'],
      },
      colors: ['#0A94FB', '#253592'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: [1, 1, 4],
      },
      // title: {
      //   text: 'XYZ - Stock Analysis (2009 - 2016)',
      //   align: 'left',
      //   offsetX: 110,
      // },
      xaxis: {
        categories: ['전체', '롱패스', '숏패스', '스루패스', '로빙스루', '드리븐 땅볼'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#0A94FB',
          },
          labels: {
            style: {
              colors: '#0A94FB',
            },
          },
          title: {
            text: 'PASS TRY',
            style: {
              color: '#0A94FB',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#253592',
          },
          labels: {
            style: {
              colors: '#253592',
            },
          },
          title: {
            text: 'PASS SUCCESS',
            style: {
              color: '#253592',
            },
          },
        },
      ],
      // tooltip: {
      //   fixed: {
      //     enabled: true,
      //     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      //     offsetY: 30,
      //     offsetX: 60,
      //   },
      // },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  };
  const otherChartState = {
    series: [
      {
        name: 'Income',
        type: 'column',
        data: otherPassTry,
      },
      {
        name: 'success',
        type: 'column',
        data: otherPassSuccess,
      },
    ],
    options: {
      chart: {
        height: 500,
        type: 'line',
        stacked: false,
      },
      fill: {
        colors: ['#00E396', '#1f634c'],
      },
      colors: ['#00E396', '#1f634c'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: [1, 1, 4],
      },
      // title: {
      //   text: 'XYZ - Stock Analysis (2009 - 2016)',
      //   align: 'left',
      //   offsetX: 110,
      // },
      xaxis: {
        categories: ['전체', '롱패스', '숏패스', '스루패스', '로빙스루', '드리븐 땅볼'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: 'PASS TRY',
            style: {
              color: '#00E396',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#1f634c',
          },
          labels: {
            style: {
              colors: '#1f634c',
            },
          },
          title: {
            text: 'PASS SUCCESS',
            style: {
              color: '#1f634c',
            },
          },
        },
      ],
      // tooltip: {
      //   fixed: {
      //     enabled: true,
      //     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      //     offsetY: 30,
      //     offsetX: 60,
      //   },
      // },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  };
  return (
    <PassContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <PassChartDiv>
          <StyledChart options={myChartState.options} series={myChartState.series} type="line" height={400} />
          <b>
            전체 패스 성공률 : {calculatePercent(myPassData.passTry, myPassData.passSuccess)}% (
            {`${myPassData.passSuccess} / ${myPassData.passTry}`})
          </b>
        </PassChartDiv>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <PassChartDiv>
          <StyledChart options={otherChartState.options} series={otherChartState.series} type="line" height={400} />
          <b>
            전체 패스 성공률 : {calculatePercent(otherPassData.passTry, otherPassData.passSuccess)}% (
            {`${otherPassData.passSuccess} / ${otherPassData.passTry}`})
          </b>
        </PassChartDiv>
      )}
    </PassContainerDiv>
  );
};

export default Pass;
