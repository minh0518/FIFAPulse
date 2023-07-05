import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Slider from 'react-slick';
import {
  AssistAndScoreDiv,
  BoxDiv,
  GoalParagraph,
  PlayerInfoDiv,
  ScoreInfoDiv,
  SeasonAndNameDiv,
  ShootContainerDiv,
  StyledChart,
  StyledSlider,
} from './Shoot.styled';
import SoccerField from './SoccerField';
import { MatchInfos } from '../../../types/props';
import { calculateGoalTime, convertPlayerName, convertPosition, getSeasonImg } from '../../../utils/MatchStatistics';
import Forfeit from '../../Forfeit';
import PlayerImg from '../../PlayerImg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  console.log(myGoalData);
  const handleOtherGoalIndex = (oldIndex: number, newIndex: number) => {
    setOtherGoalIndex(newIndex);
  };
  const handleMyGoalIndex = (oldIndex: number, newIndex: number) => {
    setMyGoalIndex(newIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(myGoalData);
  return (
    <ShootContainerDiv>
      {myMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <StyledChart options={myChartState.options} series={myChartState.series} type="bar" height={250} />
          {/* {myShootData.ownGoal !== 0 ? <span>자책골{myShootData.ownGoal}</span> : ''} */}

          {myGoalData.length && (
            <div>
              <h3>골 정보</h3>
              <ScoreInfoDiv>
                <StyledSlider {...settings} beforeChange={handleMyGoalIndex}>
                  {myGoalData
                    .sort((a, b) => a.goalTime - b.goalTime)
                    .map((i, index) => {
                      return <b key={index}>{calculateGoalTime(i.goalTime)}</b>;
                    })}
                </StyledSlider>
                <SoccerField goalData={myGoalData[myGoalIndex]} />
                <AssistAndScoreDiv assist={myGoalData[myGoalIndex].assist}>
                  {myGoalData[myGoalIndex].assist && (
                    <BoxDiv>
                      <GoalParagraph>ASSIST</GoalParagraph>

                      <PlayerInfoDiv>
                        <PlayerImg spId={myGoalData[myGoalIndex].assistSpId} width={100} height={100} />
                        <SeasonAndNameDiv>
                          <img
                            src={getSeasonImg(myPlayerData.filter((i) => i.spId === myGoalData[myGoalIndex].assistSpId)[0].spId)}
                            alt="시즌 이미지"
                          />
                          &nbsp;<b>{convertPlayerName(myGoalData[myGoalIndex].assistSpId)}</b>
                        </SeasonAndNameDiv>
                      </PlayerInfoDiv>
                    </BoxDiv>
                  )}

                  <BoxDiv>
                    <GoalParagraph>GOAL</GoalParagraph>
                    <PlayerInfoDiv>
                      <PlayerImg spId={myGoalData[myGoalIndex].spId} width={100} height={100} />
                      <SeasonAndNameDiv>
                        <img
                          src={getSeasonImg(myPlayerData.filter((i) => i.spId === myGoalData[myGoalIndex].spId)[0].spId)}
                          alt="시즌 이미지"
                          width={30}
                        />
                        &nbsp;<b>{convertPlayerName(myGoalData[myGoalIndex].spId)}</b>
                      </SeasonAndNameDiv>
                    </PlayerInfoDiv>
                  </BoxDiv>
                </AssistAndScoreDiv>
              </ScoreInfoDiv>
            </div>
          )}
        </div>
      )}

      {ohterMatchData.matchDetail.matchEndType === 2 ? (
        <Forfeit />
      ) : (
        <div>
          <StyledChart options={otherChartState.options} series={otherChartState.series} type="bar" height={250} />

          {otherGoalData.length && (
            <div>
              <h3>골 정보</h3>
              <ScoreInfoDiv>
                <StyledSlider {...settings} beforeChange={handleOtherGoalIndex}>
                  {otherGoalData
                    .sort((a, b) => a.goalTime - b.goalTime)
                    .map((i, index) => {
                      return <b key={index}>{calculateGoalTime(i.goalTime)}</b>;
                    })}
                </StyledSlider>
                <SoccerField goalData={otherGoalData[otherGoalIndex]} />
                <AssistAndScoreDiv assist={otherGoalData[otherGoalIndex].assist}>
                  {otherGoalData[otherGoalIndex].assist && (
                    <BoxDiv>
                      <GoalParagraph>ASSIST</GoalParagraph>

                      <PlayerInfoDiv>
                        <PlayerImg spId={otherGoalData[otherGoalIndex].assistSpId} width={100} height={100} />
                        <SeasonAndNameDiv>
                          <img
                            src={getSeasonImg(otherPlayerData.filter((i) => i.spId === otherGoalData[otherGoalIndex].assistSpId)[0].spId)}
                            alt="시즌 이미지"
                          />
                          &nbsp;<b>{convertPlayerName(otherGoalData[otherGoalIndex].assistSpId)}</b>
                        </SeasonAndNameDiv>
                      </PlayerInfoDiv>
                    </BoxDiv>
                  )}

                  <BoxDiv>
                    <GoalParagraph>GOAL</GoalParagraph>
                    <PlayerInfoDiv>
                      <PlayerImg spId={otherGoalData[otherGoalIndex].spId} width={100} height={100} />
                      <SeasonAndNameDiv>
                        <img
                          src={getSeasonImg(otherPlayerData.filter((i) => i.spId === otherGoalData[otherGoalIndex].spId)[0].spId)}
                          alt="시즌 이미지"
                          width={30}
                        />
                        &nbsp;<b>{convertPlayerName(otherGoalData[otherGoalIndex].spId)}</b>
                      </SeasonAndNameDiv>
                    </PlayerInfoDiv>
                  </BoxDiv>
                </AssistAndScoreDiv>
              </ScoreInfoDiv>
            </div>
          )}
        </div>
      )}
    </ShootContainerDiv>
  );
};

export default Shoot;
