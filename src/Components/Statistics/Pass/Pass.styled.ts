import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

export const PassContainerDiv = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const PassChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin: 25px 0;
  }
`;

export const StyledChart = styled(ReactApexChart)`
  width: 600px;
  margin: 0 30px;

  @media (max-width: 1420px) {
    //1024가 되어서  flex-direction: column;이 되어도 width를 계속 100% 사용
    width: 100%;
  }
`;
