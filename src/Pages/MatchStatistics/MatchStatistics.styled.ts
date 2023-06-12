import styled from 'styled-components';
import { NickNameProps } from '../../types/props';

export const MatchStatisticsContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto;

  /* // 1400px 이하일때는 970px로 고정
  @media (max-width: 1400px) {
    min-width: 970px;
  }

  // 그러다가 1024px이하일때는 레이아웃을 변경하기 때문에 (하나씩 세로로 보여줌)
  // 기존대로 70%
  @media (max-width: 1024px) {
    width: 70%;
  } */
`;

export const PlayerNickNames = styled.div`
  display: flex;
  height: 5em;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: 4em;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    min-width: 280px;
    overflow: hidden;
    padding: 19.92px 0;
    &:hover {
      transform: translateY(-5px);
    }
    transition: transform 0.3s ease;
  }
  /* span {
    font-size: 1.8rem;
    font-weight: bolder;
    margin: 5%;
  } */
`;

export const NickNameSpan = styled.span<NickNameProps>`
  border-bottom: ${(props) => (props.myDataIndex === props.selectedUsertStatistics ? '1px solid black' : 'none')};
  padding-bottom: 10px;
  font-size: 1.8rem;
  font-weight: bolder;
`;

export const MatchScoreAndTimes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const ScoresAndGoalTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around; // 이 상태에서 반응형으로 width조절해가며 변경해야 할듯
  align-items: flex-start;
  margin-top: 40px;
  padding-bottom: 2.7em;
  letter-spacing: 2px;
  position: relative; // 추가된 부분
`;

export const MyGoalTime = styled.ul`
  padding-left: 0;
  list-style: none;
  padding-right: 10em;
  li {
    padding-top: 4px;
  }
`;

export const OtherGoalTime = styled.ul`
  padding-left: 0;
  list-style: none;
  padding-left: 10em;
  li {
    padding-top: 4px;
  }
`;

export const Scores = styled.div`
  display: flex;
  align-items: center;
  position: absolute; // 추가된 부분
  left: 50%; // 추가된 부분
  transform: translate(-50%, 0); // 추가된 부분
  font-size: 1.5rem;
  font-weight: bolder;
  h2 {
    margin: 0;
  }
  span {
    font-size: 2rem;
  }
`;

export const MatchTimeDiv = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
