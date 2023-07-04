import styled from 'styled-components';

export const SoccerFieldSvg = styled.svg`
  width: 500px;

  .turf {
    fill: #376711;
  }
  .cell-free {
    fill: #7f7c5d;
  }

  .cell-sold {
    fill: transparent;
  }
  .stripe {
    stroke: #7f7c5d;
    stroke-width: 1;
  }
  .line {
    stroke: #ffffff;
    stroke-width: 1.2;
    fill: none;
  }
  .curve {
    stroke: #ffffff;
    stroke-width: 1.2;
    fill: none;
  }
  .dot {
    stroke: #ffffff;
    fill: #ffffff;
    r: 1.5;
  }
  .goal {
    stroke: #ffffff;
    stroke-width: 0.75;
    fill: url(#goal);
  }
  .goal-stripe {
    stroke: #ffffff;
    stroke-width: 1;
  }

  .fw {
    stroke: white;
    stroke-width: 3px;
    fill: red;
  }

  .mf {
    stroke: white;
    stroke-width: 3px;
    fill: #12d112;
  }

  .df {
    stroke: white;
    stroke-width: 3px;
    fill: blue;
  }

  .point {
    fill: #ffffff; /* 텍스트 색상 */
    font-size: 20px; /* 글꼴 크기 */
  }

  .player {
    fill: #ffffff;
    font-size: 20px; /* 글꼴 크기 */
  }
`;

export const tmp = '';
