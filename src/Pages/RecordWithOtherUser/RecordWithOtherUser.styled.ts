import styled, { keyframes } from 'styled-components';
import { GameResultProps } from '../../types/props';

const paintTr = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

export const RecordWithOtherUserContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const ContentDiv = styled.div`
  display: flex;
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

export const TableContentDiv = styled.div`
  // height: 500px;
  height: 35em;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.2), -10px 0 5px -2px rgba(0, 0, 0, 0.2);
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
