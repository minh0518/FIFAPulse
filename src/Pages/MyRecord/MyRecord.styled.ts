import styled from 'styled-components';

export const MyRecordContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto 10% auto;
`;

export const UserNameAndTopRankDiv = styled.div`
  padding: 8% 0 4% 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const UserNameParagraph = styled.p`
  font-size: 2rem;
  margin: 0;
  padding-right: 2%;
`;

export const TopRankDiv = styled.div`
  color: gray;
`;

export const ChooseStatisticsUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  margin-bottom: 7%;
`;

export const MatchResultsByMatchTypesList = styled.li`
  height: 50px;
  flex-grow: 1;
  width: 30%; // 지정을 해 줘야 각 li의 크기가 글자수(=버튼의 크기)만큼 차지하지 않고
  // 서로 동일한 너비를 가짐
  border: 1px solid black;
  border-bottom: none;
`;

export const StatisticsSelectionButton = styled.button`
  // li의 너비와 높이를 전부 버튼의 영역으로 사용
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
`;

export const Test = styled.div`
  border-bottom: 1px solid black;
`;
