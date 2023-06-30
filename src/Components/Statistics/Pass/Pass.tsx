import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { PassChartDiv, PassContainerDiv, StyledChart } from './Pass.styled';
import { MatchInfos } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Pass = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myPassData, otherPassData] = [matchInfos[0].pass, matchInfos[1].pass];
  const [myPassTry, myPassSuccess] = [
    [
      myPassData.passTry,
      myPassData.drivenGroundPassTry,
      myPassData.lobbedThroughPassTry,
      myPassData.longPassTry,
      myPassData.shortPassTry,
      myPassData.throughPassTry,
    ],
    [
      myPassData.passSuccess,
      myPassData.drivenGroundPassSuccess,
      myPassData.lobbedThroughPassSuccess,
      myPassData.longPassSuccess,
      myPassData.shortPassSuccess,
      myPassData.throughPassSuccess,
    ],
  ];

  const [otherPassTry, otherPassSuccess] = [
    [
      otherPassData.passTry,
      otherPassData.drivenGroundPassTry,
      otherPassData.lobbedThroughPassTry,
      otherPassData.longPassTry,
      otherPassData.shortPassTry,
      otherPassData.throughPassTry,
    ],
    [
      otherPassData.passSuccess,
      otherPassData.drivenGroundPassSuccess,
      otherPassData.lobbedThroughPassSuccess,
      otherPassData.longPassSuccess,
      otherPassData.shortPassSuccess,
      otherPassData.throughPassSuccess,
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
        categories: ['전체', '드리븐', '로빙스루', '롱패스', '숏패스', '스루패스'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: 'black',
          },
          labels: {
            style: {
              colors: 'black',
            },
          },
          title: {
            text: 'PASS TRY',
            style: {
              color: 'black',
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
            color: 'black',
          },
          labels: {
            style: {
              colors: 'black',
            },
          },
          title: {
            text: 'PASS SUCCESS',
            style: {
              color: 'black',
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
        categories: ['전체', '드리븐', '로빙스루', '롱패스', '숏패스', '스루패스'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: 'black',
          },
          labels: {
            style: {
              colors: 'black',
            },
          },
          title: {
            text: 'PASS TRY',
            style: {
              color: 'black',
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
            color: 'black',
          },
          labels: {
            style: {
              colors: 'black',
            },
          },
          title: {
            text: 'PASS SUCCESS',
            style: {
              color: 'black',
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
            전체 성공률 : {calculatePercent(myPassData.passTry, myPassData.passSuccess)}% ({`${myPassData.passSuccess} / ${myPassData.passTry}`})
          </b>
        </PassChartDiv>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <PassChartDiv>
          <StyledChart options={otherChartState.options} series={otherChartState.series} type="line" height={400} />
          <b>
            전체 성공률 : {calculatePercent(otherPassData.passTry, otherPassData.passSuccess)}% (
            {`${otherPassData.passSuccess} / ${otherPassData.passTry}`})
          </b>
        </PassChartDiv>
      )}
    </PassContainerDiv>
  );
};

export default Pass;
