import styled from 'styled-components';
import { tradeTypeProps } from '../../types/props';

export const TableHeaderDiv = styled.div`
  margin-top: 3%;
  border-top: 5px solid black;
`;

export const TradeLogContainerDiv = styled.div`
  width: 50%;
  margin-left: 2%;

  // 1024px이하가 되면 MyRecord 너비가 1024px의 70%가 되는데
  // 이땐 MyRecord 너비의 50%는 너무 좁으므로 80%정도로 사용
  @media (max-width: 1024px) {
    margin-top: 8%;
    margin-left: 0%;
    width: 80%;
  }
`;

export const HeadingAndButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TradeLogHeading = styled.h2``;

export const ChooseBuyOrSellUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 10%;
`;

export const BuyButton = styled.button<tradeTypeProps>`
  border: none;
  border-bottom: ${(props) => (props.tradeType === 'buy' ? '1px solid black' : 'none')};
  cursor: pointer;
  background: transparent;
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const SellButton = styled.button<tradeTypeProps>`
  border: none;
  border-bottom: ${(props) => (props.tradeType === 'sell' ? '1px solid black' : 'none')};
  cursor: pointer;
  background: transparent;
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const Table = styled.table`
  width: 100%;
  // table-layout: fixed;
  border: 0;
  padding: 0;
  border-spacing: 0;
  /* cellpadding : "0"; 
  cellspacing : "0" ; */
`;

export const TableContentDiv = styled.div`
  // height: 500px;
  height: 38.6em;
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

export const TableTr = styled.tr`
  overflow: hidden;
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

export const TablePlayerTd = styled.td`
  display: flex;
  padding: 4% 2%;
  text-align: center;
  /* vertical-align: middle; */
  font-weight: 300;
  font-size: 1rem;
  color: black;
  /* border-bottom: solid 1px rgba(255, 255, 255, 1); */
  border-bottom: 1px solid white;
`;

export const TableTd = styled.td`
  padding: 4% 2%;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 1rem;
  color: black;
  /* border-bottom: solid 1px rgba(255, 255, 255, 1); */
  border-bottom: 1px solid white;
`;

export const PlayerInfo = styled.div`
  margin-left: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  // 시즌+선수이름 , 강화등급 이미지를 세로로 나열하고 이 2개를 수직 중앙 정렬
`;

// 시즌 이미지와 선수 이름을 가로로 중앙선 정렬 (같은 중앙선 라인에 있도록)
export const PlayerSeasonAndName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7%;
`;
