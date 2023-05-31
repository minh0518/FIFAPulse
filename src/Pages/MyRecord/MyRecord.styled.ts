import styled, { keyframes } from 'styled-components';

const underline = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const MyRecordContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto 10% auto;
`;

export const UserNameAndTopRankDiv = styled.div`
  padding: 8% 0 4% 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid black;
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
  // justify-content: space-around; // flex-grow때문에 사용할 필요가 없음
  padding-left: 0;
  margin: 7% 0;
`;

export const MatchResultsByMatchTypesList = styled.li`
  height: 50px;
  flex-grow: 1; // 2개의 버튼이 나머지 너비를 전부 차지하게 함
  width: 30%; // 지정을 해 줘야 각 li의 크기가 글자수(=버튼의 크기)만큼 차지하지 않고
  // 서로 동일한 너비를 가짐

  color: gray;
  &:hover {
    transform: translateY(-5px);
    color: white;
  }
  transition: transform 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #6ab04d;
    transition: width 0.3s;
    z-index: -1;
  }

  &:hover:after {
    animation: ${underline} 0.3s forwards;
  }
`;

export const StatisticsSelectionButton = styled.button`
  // li의 너비와 높이를 전부 버튼의 영역으로 사용
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 900;
  color: inherit;
  cursor: pointer;
`;

export const Test = styled.div`
  border-bottom: 1px solid black;
`;
