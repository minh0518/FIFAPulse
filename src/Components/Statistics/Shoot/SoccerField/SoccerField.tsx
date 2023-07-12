import React from 'react';
import { SoccerFieldSvg } from './SoccerField.styled';

const SoccerGround = ({ goalData }: any) => {
  return (
    <div>
      <SoccerFieldSvg viewBox="0 0 1150 780" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="striped" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect x="0" y="0" width="4" height="4" fill="transparent" />
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" className="stripe" />
          </pattern>
          <pattern id="goal" patternUnits="userSpaceOnUse" width="2" height="2">
            <rect x="0" y="0" width="2" height="2" fill="transparent" />
            <line x1="0" y1="0" x2="1" y2="0" className="goal-stripe" />
            <line x1="1" y1="0" x2="1" y2="1" className="goal-stripe" />
          </pattern>
          <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0 0, 10 5, 0 10" />
          </marker>
        </defs>

        <path d="M 0,0 h1150 v780 h-1150z" className="turf" />

        <polyline points="575,730 575,50 1100,50 1100,730 50,730 50,50 575,50" className="line" />

        <circle cx="575" cy="390" className="line" r="91.5" />

        <circle cx="575" cy="390" className="dot" />

        <circle cx="160" cy="390" className="dot" />
        <circle cx="990" cy="390" className="dot" />

        <path
          d="M251.5,390 a91.5,91.5 0 0,0 -36.5,-73.4 M251.5,390 a91.5,91.5 0 0,1 -36.5,73.4 M898.5,390 a91.5,95.5 0 0,0 36.5,73.4 M898.5,390 a91.5,95.5 0 0,1 36.5,-73.4"
          className="line"
        />

        <path d="M 50 60 Q 60 60 60 50 M 1090 50 Q 1090 60 1100 60 M 50 720 Q 60 720 60 730 M 1090 730 Q 1090 720 1100 720" className="line" />

        <polyline points="50,426.6 35,426.6 35,353.4 50,353.4" className="goal" />
        <polyline points="1100,426.6 1115,426.6 1115,353.4 1100,353.4" className="goal" />

        <polyline points="50,481.6 105,481.6 105,298.4 50,298.4 50,591.6 215,591.6 215,188.4 50,188.4" className="line" />
        <polyline points="1100,481.6 1045,481.6 1045,298.4 1100,298.4 1100,591.6 935,591.6 935,188.4 1100,188.4" className="line" />

        {/* 축구장 라인 부분부터 좌표가 시작해야 하므로 x와y에 각각 -40을 해줘야 함 */}
        {goalData.assist && (
          <>
            <circle cx={goalData.assistX * 1070 + 40} cy={goalData.assistY * 700 + 40} r="10" fill="blue" />
            <line
              x1={goalData.assistX * 1070 + 40}
              y1={goalData.assistY * 700 + 40}
              x2={goalData.x * 1070 + 40}
              y2={goalData.y * 700 + 40}
              stroke="black"
              strokeWidth={5}
              markerEnd="url(#arrowhead)"
            />
          </>
        )}
        <circle cx={goalData.x * 1070 + 40} cy={goalData.y * 700 + 40} r="10" fill="red" />
      </SoccerFieldSvg>
    </div>
  );
};

export default SoccerGround;
