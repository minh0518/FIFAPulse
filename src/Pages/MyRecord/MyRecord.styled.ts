import styled from 'styled-components';

export const MyRecordContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto 10% auto;

  // 1400px 이하일때는 970px로 고정
  @media (max-width: 1400px) {
    min-width: 970px;
  }

  // 그러다가 1024px이하일때는 레이아웃을 변경하기 때문에 (하나씩 세로로 보여줌)
  // 기존대로 70%
  @media (max-width: 1024px) {
    width: 70%;
  }
`;

export const UserNameAndTopRankDiv = styled.div`
  padding: 8% 0 4% 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 2px solid black;
`;

export const UserNameParagraph = styled.p`
  font-size: 2rem;
  margin: 0;
  padding-right: 2%;
`;

export const TopRankDiv = styled.div`
  color: darkgreen;
  font-weight: bold;
`;

export const ContentDiv = styled.div`
  display: flex;
  // 1400px 이하일때는 970px로 고정
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
