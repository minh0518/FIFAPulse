import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ChartContainerDiv, DefenceContainerDiv, ForfeitDiv, StyledChart } from './Defence.styled';
import { MatchInfos } from '../../../types/props';
import { calculatePercent } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';

const Defence = ({ matchInfos }: MatchInfos) => {
  const [myMatchData, ohterMatchData] = [matchInfos[0], matchInfos[1]];
  const [myDefenceData, ohterDefenceData] = [matchInfos[0].defence, matchInfos[1].defence];

  const myChartState = {
    series: [myDefenceData.blockTry * 4, myDefenceData.tackleTry * 4, myDefenceData.blockSuccess * 4, myDefenceData.tackleSuccess * 4],
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
        offsetX: 160,
        offsetY: 15,
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
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  const otherChartState = {
    series: [ohterDefenceData.blockTry * 4, ohterDefenceData.tackleTry * 4, ohterDefenceData.blockSuccess * 4, ohterDefenceData.tackleSuccess * 4],
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
        offsetX: 160,
        offsetY: 15,
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
          breakpoint: 480,
          options: {
            legend: {
              show: false,
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
        // <ul>
        //   <li>블록 시도 : {myDefenceData.blockTry}</li>
        //   <li>블록 성공 : {myDefenceData.blockSuccess}</li>
        //   <li>
        //     블록 성공률 : {calculatePercent(myDefenceData.blockTry, myDefenceData.blockSuccess)}% (
        //     {`${myDefenceData.blockSuccess} / ${myDefenceData.blockTry}`})
        //   </li>
        //   <li>태클 시도 : {myDefenceData.tackleTry}</li>
        //   <li>태클 성공 : {myDefenceData.tackleSuccess}</li>
        //   <li>
        //
        //   </li>
        // </ul>
        <ChartContainerDiv>
          <StyledChart options={myChartState.options} series={myChartState.series} type="radialBar" height={360} width={670} />
          블록 성공률 : {calculatePercent(myDefenceData.blockTry, myDefenceData.blockSuccess)}% <br />
          태클 성공률 : {calculatePercent(myDefenceData.tackleTry, myDefenceData.tackleSuccess)}%
        </ChartContainerDiv>
      )}
      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        // <ul>
        //   <li>블록 시도 : {ohterDefenceData.blockTry}</li>
        //   <li>블록 성공 : {ohterDefenceData.blockSuccess}</li>
        //   <li>
        //     블록 성공률 : {calculatePercent(ohterDefenceData.blockTry, ohterDefenceData.blockSuccess)}% (
        //     {`${ohterDefenceData.blockSuccess} / ${ohterDefenceData.blockTry}`})
        //   </li>
        //   <li>태클 시도 : {ohterDefenceData.tackleTry}</li>
        //   <li>태클 성공 : {ohterDefenceData.tackleSuccess}</li>
        //   <li>
        //     태클 성공률 : {calculatePercent(ohterDefenceData.tackleTry, ohterDefenceData.tackleSuccess)}% (
        //     {`${ohterDefenceData.tackleSuccess} / ${ohterDefenceData.tackleTry}`})
        //   </li>
        // </ul>
        <ChartContainerDiv>
          <StyledChart options={otherChartState.options} series={otherChartState.series} type="radialBar" height={360} width={670} />
          블록 성공률 : {calculatePercent(ohterDefenceData.blockTry, ohterDefenceData.blockSuccess)}% <br />
          태클 성공률 : {calculatePercent(ohterDefenceData.tackleTry, ohterDefenceData.tackleSuccess)}%
        </ChartContainerDiv>
      )}
    </DefenceContainerDiv>
  );
};

export default Defence;
