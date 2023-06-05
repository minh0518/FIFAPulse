import styled from 'styled-components';

export const TableHeaderDiv = styled.div`
  margin-top: 3%;
  border-top: 5px solid black;
`;

export const TradeLogContainerDiv = styled.div`
  width: 50%;
  margin-left: 2%;
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
  height: 37em;
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
  vertical-align: middle;
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

  // 선수 이미지와 나머지 정보들을 가로로 중앙선 정렬 (같은 중앙선 라인에 있도록)
`;

// 시즌 이미지와 선수 이름을 가로로 중앙선 정렬 (같은 중앙선 라인에 있도록)
export const PlayerSeasonAndName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7%;
`;
