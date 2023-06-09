import styled, { keyframes } from 'styled-components';
import { GameResultProps, MatchLengthProps } from '../../types/props';

const paintTr = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

export const MatchResultsByMatchTypesContainer = styled.div`
  width: 50%;
  margin-right: 2%;

  // 1024px이하가 되면 MyRecord 너비가 1024px의 70%가 되는데
  // 이땐 MyRecord 너비의 50%는 너무 좁으므로 80%정도로 사용
  @media (max-width: 1024px) {
    margin-right: 0%;
    width: 80%;
  }
`;

export const WinningpercentageDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h2 {
    display: inline-block;
    margin-bottom: 0; // h2기본 margin 제거
  }
  span {
    color: gray;
    white-space: nowrap;
  }
  ul {
    padding-left: 0; // justify-content: space-between 상태에서 최근 경기 승률 문구를 왼쪽으로 밀어냄
    display: flex;
    list-style: none;
    margin-bottom: 0;
  }
`;

export const MatchLengthBuuton = styled.button<MatchLengthProps>`
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => (props.matchLength === props.variant ? '1px solid black' : 'none')};
  font-weight: 1000;
  font-size: 1rem;
`;

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
  border-top: 5px solid black;
`;

export const TableContentDiv = styled.div`
  // height: 500px;
  height: 35em;

  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  ::-webkit-scrollbar {
    width: 5px;
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
  // padding: 20px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: gray;
  text-transform: uppercase;
`;
export const TableThParagraph = styled.p`
  margin: 0 20px;
  padding: 15px 0;
  border-bottom: 2px solid black;
`;

export const TableTr = styled.tr`
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;

  &:after {
    content: '';
    position: absolute;

    // 맨 아래, 맨 왼쪽에서부터
    // 높이는 아예없는 상태에서 너비를 가득 채운 상태로 올라오기
    bottom: 0;
    left: 0; // 맨 왼쪽도 지정해 줘야 함
    height: 0;
    width: 100%;
    background: lightgray;
    transition: width 0.3s;
    z-index: -1;
  }

  &:hover:after {
    animation: ${paintTr} 0.3s forwards;
  }
`;

export const TableTd = styled.td`
  width: 100%; // 이렇게 해줘야 가상 요소를 쓰더라도 빈 공간이 안 생기게 됨
  padding: 4% 2%;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 1rem;
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

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35em; // 기존 테이블과 높이 통일
`;

export const NotFoundMatchDataDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35em; // 기존 테이블과 높이 통일
  font-size: 1.2rem;
  font-weight: bolder;
`;
