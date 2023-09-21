import React from 'react';
import { ChartContainerDiv, DefenceContainerDiv, ForfeitDiv, StyledChart } from './Defence.styled';
import { MatchInfos } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Defence = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myDefenceData, ohterDefenceData] = [matchInfos[0].defence, matchInfos[1].defence];

  const myChartState = {
    series: [
      myDefenceData.blockTry * 4,
      myDefenceData.tackleTry * 4,
      myDefenceData.blockSuccess * 4,
      myDefenceData.tackleSuccess * 4,
    ],
    options: {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['블록 시도', '태클 시도', '블록 성공', '태클 성공'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 140,
        offsetY: 7,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter(seriesName: any, opts: any) {
          return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex] / 4} 회`;
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 1420,
          options: {
            legend: {
              floating: true,
              position: 'left',
              offsetX: -20,
              offsetY: 7,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            legend: {
              floating: true,
              position: 'left',
              offsetX: 150,
              offsetY: 7,
            },
          },
        },
      ],
    },
  };
  const otherChartState = {
    series: [
      ohterDefenceData.blockTry * 4,
      ohterDefenceData.tackleTry * 4,
      ohterDefenceData.blockSuccess * 4,
      ohterDefenceData.tackleSuccess * 4,
    ],
    options: {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#14db60', '#0db915', '#129965', '#077764c6'],
      labels: ['블록 시도', '태클 시도', '블록 성공', '태클 성공'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 140,
        offsetY: 7,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter(seriesName: any, opts: any) {
          return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex] / 4} 회`;
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 1420,
          options: {
            legend: {
              floating: true,
              position: 'left',
              offsetX: -20,
              offsetY: 7,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            legend: {
              floating: true,
              position: 'left',
              offsetX: 150,
              offsetY: 7,
            },
          },
        },
      ],
    },
  };
  return (
    <DefenceContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ChartContainerDiv>
          <StyledChart options={myChartState.options} series={myChartState.series} type="radialBar" height={360} />
          <b>블록 성공률 : {calculatePercent(myDefenceData.blockTry, myDefenceData.blockSuccess)}% </b>
          <b>태클 성공률 : {calculatePercent(myDefenceData.tackleTry, myDefenceData.tackleSuccess)}%</b>
        </ChartContainerDiv>
      )}
      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <ChartContainerDiv>
          <StyledChart
            options={otherChartState.options}
            series={otherChartState.series}
            type="radialBar"
            height={360}
          />
          <b>블록 성공률 : {calculatePercent(ohterDefenceData.blockTry, ohterDefenceData.blockSuccess)}% </b>
          <b>태클 성공률 : {calculatePercent(ohterDefenceData.tackleTry, ohterDefenceData.tackleSuccess)}%</b>
        </ChartContainerDiv>
      )}
    </DefenceContainerDiv>
  );
};

export default Defence;
