import styled from 'styled-components';

export const WhoScoredContainerDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const WhoScoredSvg = styled.svg`
  width: 100%;

  .mine {
    stroke: white;
    stroke-width: 1px;
    fill: #eb5b14;
  }
  .other {
    stroke: white;
    stroke-width: 1px;
    fill: #008be0;
  }

  .point {
    fill: #ffffff;
    font-size: 8px;
  }

  .player {
    fill: #ffffff;
    font-weight: bolder;
    font-size: 6px;
  }

  #hoverDiv {
    position: absolute;
    pointer-events: none;
    padding: 20px;
    background: #fff;
    border: 1px solid #ccc;
  }
`;
