import ReactApexChart from 'react-apexcharts';
import Slider from 'react-slick';
import styled from 'styled-components';
import { AssistProps } from '../../../types/props';

export const ShootContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledChart = styled(ReactApexChart)`
  width: 470px;
  @media (max-width: 1420px) {
    //1024가 되어서  flex-direction: column;이 되어도 width를 계속 100% 사용
    width: 100%;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 450px;

  margin: 40px 0px;
`;

export const ScoreInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlayerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1);
  border-radius: 10px;
  height: 15em;
`;
export const SeasonAndNameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const GoalParagraph = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: bolder;
`;

export const BoxDiv = styled.div`
  width: 40%;
`;

export const AssistAndScoreDiv = styled.div<AssistProps>`
  width: 100%;
  display: flex;
  //justify-content: space-between;
  justify-content: ${(props) => (props.assist ? 'space-between' : 'center')};
`;
