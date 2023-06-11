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

export const ScoresAndTimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const ScoresDiv = styled.div`
  display: flex;
  margin-top: 40px;
  padding-bottom: 2.7em;
  font-size: 2rem;
  h2 {
    margin: 0;
  }
`;

export const TimeDiv = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
