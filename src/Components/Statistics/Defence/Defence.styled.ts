import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export const DefenceContainerDiv = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ForfeitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledChart = styled(ApexCharts)`
  width: 650px;
  @media (max-width: 1420px) {
    //1024가 되어서  flex-direction: column;이 되어도 width를 계속 100% 사용
    width: 100%;
  }
`;
