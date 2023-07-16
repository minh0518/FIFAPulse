import React, { useEffect, useRef, useState } from 'react';
import { WhoScoredContainerDiv, WhoScoredSvg } from './WhoScored.styled';

import { MatchInfos } from '../../../../types/props';
import {
  convertPlayerName,
  convertPosition,
  myPositionCord,
  mySubPositionCord,
  otherPositionCord,
  otherSubPositionCord,
} from '../../../../utils/MatchStatistics';

const WhoScored = ({ matchInfos }: MatchInfos) => {
  const [hoverDivStyle, setHoverDivStyle] = useState<React.CSSProperties>({ display: 'none' });

  const showHoverDiv = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    // svg를 기반으로 해서 보여줘야 하므로 축구장 전에 svg의 정보를 가져와야 함
    const svgRect = event.currentTarget.ownerSVGElement?.getBoundingClientRect();

    if (svgRect) {
      const leftPos = rect.x - svgRect.x + rect.width;
      const topPos = rect.y - svgRect.y + rect.height;

      setHoverDivStyle({
        display: 'block',
        position: 'absolute',
        left: `${leftPos}px`,
        top: `${topPos}px`,
      });
    }
  };

  const hideHoverDiv = () => {
    setHoverDivStyle({ display: 'none' });
  };

  // readonly로 설정되어 있으므로 원본을 변경하는 sort를 사용하기 위해 복사해서 사용
  const [myPlayerData, ohterPlayerData] = [
    [...matchInfos[0].player].sort((a, b) => a.spPosition - b.spPosition),
    [...matchInfos[1].player].sort((a, b) => a.spPosition - b.spPosition),
  ];

  const bestPlayer = [...myPlayerData, ...ohterPlayerData].sort((a, b) => b.status.spRating - a.status.spRating);
  console.log(bestPlayer);

  const [myStartingPlayerData, otherStartingPlayerData] = [
    myPlayerData.filter((i) => {
      return i.spPosition !== 28;
    }),
    ohterPlayerData.filter((i) => {
      return i.spPosition !== 28;
    }),
  ];

  const [mySublayerData, otherSublayerData] = [
    myPlayerData.filter((i) => {
      return i.spPosition === 28;
    }),
    ohterPlayerData.filter((i) => {
      return i.spPosition === 28;
    }),
  ];

  const subPlayerNameLength = 5;

  return (
    <WhoScoredContainerDiv>
      <WhoScoredSvg preserveAspectRatio="none" viewBox="0 0 480 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="MC-480x225" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="MC_Pitch_Final">
            <rect id="Pitch-Background" fill="#376711" fillRule="nonzero" x="0" y="0" width="480" height="300" />
            <g id="Stripes" fill="#33620E" fillRule="nonzero">
              <rect id="Rectangle" x="0" y="0" width="40" height="250" />
              <rect id="Rectangle-Copy-4" x="240" y="0" width="40" height="249.324324" />
              <rect id="Rectangle-Copy-2" x="80" y="0" width="40" height="250" />
              <rect id="Rectangle-Copy-5" x="320" y="0" width="40" height="250" />
              <rect id="Rectangle-Copy-3" x="160" y="0" width="40" height="250" />
              <rect id="Rectangle-Copy-6" x="400" y="0" width="40" height="250" />
            </g>
            <ellipse
              id="Centre-Circle"
              stroke="#687D58"
              fillOpacity="0"
              fill="#2C4815"
              fillRule="nonzero"
              cx="240"
              cy="125"
              rx="30"
              ry="30.4054054"
            />
            <ellipse id="Oval" fill="#687D58" fillRule="nonzero" cx="240.333333" cy="125.337838" rx="2.33333333" ry="2.36486486" />
            <g id="Home-Goal-Lines" transform="translate(0.000000, 70.945946)" stroke="#687D58">
              <g id="Group" transform="translate(40.000000, 36.486486)" fill="#2C4815" fillOpacity="0" fillRule="nonzero">
                <path
                  d="M0.22010202,0.0272296486 L0.263713173,35.1033154 C4.16417671,34.8356874 7.666974,32.8962874 10.2389051,29.9147176 C12.9804461,26.7365236 14.6666667,22.3755076 14.6666667,17.5667322 C14.6666667,12.7489575 12.9741287,8.3806102 10.2234999,5.20091322 C7.64341027,2.21835766 4.1302596,0.282846243 0.22010202,0.0272296486 Z"
                  id="Combined-Shape"
                />
              </g>
              <polyline id="Path-3" points="0 33.7837838 13.3333333 33.7837838 13.3333333 74.3243243 0 74.3243243" />
              <polyline id="Path-3" points="0 0 40 0 40 108.108108 0 108.108108" />
            </g>
            <g
              id="Away-Goal-Lines"
              transform="translate(452.833333, 124.554054) scale(-1, 1) rotate(-180.000000) translate(-452.833333, -124.554054) translate(425.333333, 70.054054)"
              stroke="#687D58"
            >
              <polyline
                id="Path-3"
                transform="translate(34.666667, 54.054054) rotate(-180.000000) translate(-34.666667, -54.054054) "
                points="14.6666667 0 54.6666667 0 54.6666667 108.108108 14.6666667 108.108108"
              />
              <polyline
                id="Path-3"
                transform="translate(48.000000, 54.054054) rotate(-180.000000) translate(-48.000000, -54.054054) "
                points="41.3333333 33.7837838 54.6666667 33.7837838 54.6666667 74.3243243 41.3333333 74.3243243"
              />
              <path
                d="M0.21084714,36.5030128 L-1.18423789e-15,71.5947233 C3.95882549,71.3992902 7.52390577,69.4827206 10.1445874,66.4944754 C12.9392693,63.3078257 14.6624952,58.9040999 14.6624952,54.0428467 C14.6624952,49.225072 12.9699573,44.8567247 10.2193285,41.6770278 C7.63812077,38.6931797 4.12304325,36.7572835 0.21084714,36.5030128 Z"
                id="Combined-Shape"
                fillOpacity="0"
                fill="#2C4815"
                fillRule="nonzero"
                transform="translate(7.331248, 54.048868) rotate(-180.000000) translate(-7.331248, -54.048868) "
              />
            </g>
            <line x1="240.333333" y1="0.675675676" x2="240.333333" y2="249.324324" id="Line-10" stroke="#687D58" strokeLinecap="square" />
          </g>
        </g>

        {/* 선발 */}
        {myStartingPlayerData.map((i, index) => {
          return (
            // <g key={index} onMouseOver={showHoverDiv} onMouseOut={hideHoverDiv}>
            <g key={index}>
              <rect
                x={myPositionCord[convertPosition(i.spPosition)].x - 25}
                y={myPositionCord[convertPosition(i.spPosition)].y - 25}
                width="50"
                height="50"
                fill="transparent"
              />
              {i.spId === bestPlayer[0].spId && i.status.spRating === bestPlayer[0].status.spRating ? (
                <g
                  transform={`translate(${myPositionCord[convertPosition(i.spPosition)].x - 14}, ${
                    myPositionCord[convertPosition(i.spPosition)].y - 17
                  }) scale(0.14)`}
                >
                  <polygon
                    points="100,10 40,198 190,78 10,78 160,198"
                    style={{ fill: '#7CC700', stroke: '#331B3F', strokeWidth: '0', fillRule: 'nonzero' }}
                    className="mine"
                  />
                </g>
              ) : (
                <circle
                  cx={myPositionCord[convertPosition(i.spPosition)].x}
                  cy={myPositionCord[convertPosition(i.spPosition)].y}
                  r="10"
                  className="mine"
                />
              )}

              <text
                x={myPositionCord[convertPosition(i.spPosition)].x}
                y={myPositionCord[convertPosition(i.spPosition)].y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="point"
              >
                {i.status.spRating}
              </text>
              <text
                x={myPositionCord[convertPosition(i.spPosition)].x}
                y={myPositionCord[convertPosition(i.spPosition)].nameY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="player"
              >
                {convertPlayerName(i.spId)}
              </text>
            </g>
          );
        })}

        {/* 후보 */}
        {mySublayerData.map((i, index) => {
          return (
            // <g key={index} onMouseOver={showHoverDiv} onMouseOut={hideHoverDiv}>
            <g key={index}>
              <rect x={mySubPositionCord[index].x - 25} y={mySubPositionCord[index].y - 25} width="50" height="50" fill="transparent" />
              {i.spId === bestPlayer[0].spId && i.status.spRating === bestPlayer[0].status.spRating ? (
                <g transform={`translate(${mySubPositionCord[index].x - 14}, ${mySubPositionCord[index].y - 17}) scale(0.14)`}>
                  <polygon
                    points="100,10 40,198 190,78 10,78 160,198"
                    style={{ fill: '#7CC700', stroke: '#331B3F', strokeWidth: '0', fillRule: 'nonzero' }}
                    className="mine"
                  />
                </g>
              ) : (
                <circle cx={mySubPositionCord[index].x} cy={mySubPositionCord[index].y} r="10" className="mine" />
              )}

              <text x={mySubPositionCord[index].x} y={mySubPositionCord[index].y} textAnchor="middle" dominantBaseline="middle" className="point">
                {i.status.spRating}
              </text>
              <text
                x={mySubPositionCord[index].x}
                y={mySubPositionCord[index].nameY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="player"
              >
                {convertPlayerName(i.spId).length > subPlayerNameLength
                  ? `${convertPlayerName(i.spId).slice(0, subPlayerNameLength)}...`
                  : convertPlayerName(i.spId)}
              </text>
            </g>
          );
        })}

        {/* 선발 */}
        {otherStartingPlayerData.map((i, index) => {
          return (
            // <g key={index} onMouseOver={showHoverDiv} onMouseOut={hideHoverDiv}>
            <g key={index}>
              <rect
                x={otherPositionCord[convertPosition(i.spPosition)].x - 25}
                y={otherPositionCord[convertPosition(i.spPosition)].y - 25}
                width="50"
                height="50"
                fill="transparent"
              />
              {i.spId === bestPlayer[0].spId && i.status.spRating === bestPlayer[0].status.spRating ? (
                <g
                  transform={`translate(${otherPositionCord[convertPosition(i.spPosition)].x - 14}, ${
                    otherPositionCord[convertPosition(i.spPosition)].y - 17
                  }) scale(0.14)`}
                >
                  <polygon
                    points="100,10 40,198 190,78 10,78 160,198"
                    style={{ fill: '#7CC700', stroke: '#331B3F', strokeWidth: '0', fillRule: 'nonzero' }}
                    className="mine"
                  />
                </g>
              ) : (
                <circle
                  cx={otherPositionCord[convertPosition(i.spPosition)].x}
                  cy={otherPositionCord[convertPosition(i.spPosition)].y}
                  r="10"
                  className="other"
                />
              )}

              <text
                x={otherPositionCord[convertPosition(i.spPosition)].x}
                y={otherPositionCord[convertPosition(i.spPosition)].y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="point"
              >
                {i.status.spRating}
              </text>
              <text
                x={otherPositionCord[convertPosition(i.spPosition)].x}
                y={otherPositionCord[convertPosition(i.spPosition)].nameY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="player"
              >
                {convertPlayerName(i.spId)}
              </text>
            </g>
          );
        })}

        {/* 후보 */}
        {otherSublayerData.map((i, index) => {
          return (
            // <g key={index} onMouseOver={showHoverDiv} onMouseOut={hideHoverDiv}>
            <g key={index}>
              <rect x={otherSubPositionCord[index].x - 25} y={otherSubPositionCord[index].y - 25} width="50" height="50" fill="transparent" />
              {i.spId === bestPlayer[0].spId && i.status.spRating === bestPlayer[0].status.spRating ? (
                <g transform={`translate(${otherSubPositionCord[index].x - 14}, ${otherSubPositionCord[index].y - 17}) scale(0.14)`}>
                  <polygon
                    points="100,10 40,198 190,78 10,78 160,198"
                    style={{ fill: '#7CC700', stroke: '#331B3F', strokeWidth: '0', fillRule: 'nonzero' }}
                    className="mine"
                  />
                </g>
              ) : (
                <circle cx={otherSubPositionCord[index].x} cy={otherSubPositionCord[index].y} r="10" className="other" />
              )}

              <text
                x={otherSubPositionCord[index].x}
                y={otherSubPositionCord[index].y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="point"
              >
                {i.status.spRating}
              </text>
              <text
                x={otherSubPositionCord[index].x}
                y={otherSubPositionCord[index].nameY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="player"
              >
                {convertPlayerName(i.spId).length > subPlayerNameLength
                  ? `${convertPlayerName(i.spId).slice(0, subPlayerNameLength)}...`
                  : convertPlayerName(i.spId)}
              </text>
            </g>
          );
        })}
      </WhoScoredSvg>

      <div id="hoverDiv" style={hoverDivStyle}>
        This is the Hover Div
      </div>
    </WhoScoredContainerDiv>
  );
};

export default WhoScored;
