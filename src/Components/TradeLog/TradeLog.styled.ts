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
