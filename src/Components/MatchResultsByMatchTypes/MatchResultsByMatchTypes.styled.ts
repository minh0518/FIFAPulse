import styled from 'styled-components';
import { GameResultProps } from '../../types/props';

export const MatchResultsByMatchTypesContainer = styled.div``;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 0;
  padding: 0;
  border-spacing: 0;
  /* cellpadding : "0"; 
  cellspacing : "0" ; */
`;

export const TableHeaderDiv = styled.div`
  margin-top: 3%;
  background-color: lightgray;
  border-radius: 10px;
`;

export const TableContentDiv = styled.div`
  // height: 500px;
  height: 35em;

  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: forestgreen;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }
`;

export const TableTh = styled.th`
  padding: 20px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: black;
  text-transform: uppercase;
`;

export const TableTr = styled.tr`
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;
`;

export const TableTd = styled.td`
  padding: 2%;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 1.2rem;
  color: black;
  /* border-bottom: solid 1px rgba(255, 255, 255, 1); */
  border-bottom: 1px solid white;
`;

export const GameResultSpan = styled.span<GameResultProps>`
  // color: ${(props) => (props.result === '승' ? 'blue' : props.result === '패' ? 'red' : 'black')};
  color: ${(props) => ({ 승: 'blue', 무: 'black', 패: 'red' }[props.result])};
`;

// 몰수 승
export const GameResultForfeitWin = styled.span`
  color: blue;
  font-weight: 1000;
`;

// 몰수 패
export const GameResultForfeitLose = styled.span`
  color: red;
  font-weight: 1000;
`;
