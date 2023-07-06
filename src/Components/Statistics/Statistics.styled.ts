import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export const StatisticsContainerDiv = styled.div``;

export const OutlineHeading = styled.h2`
  margin-top: 2em;
`;

export const StyledChart = styled(ApexCharts)`
  max-width: 80%;
  margin: 0 auto;
`;

export const OutlineUl = styled.ul`
  list-style: none;
  li {
    margin: 1.2em 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
  }
  width: 50%;
  margin: 0 auto;
  padding-bottom: 10%;
  border-bottom: 1px solid lightgray;
`;

export const DetailStatisticsDiv = styled.div`
  margin-top: 5%;
`;

interface StatisticsMode {
  // statisticsMode: 'defence' | 'pass' | 'shoot' | 'player';
  statisticsMode: string;
  value: string;
}
export const DetailStatisticsUl = styled.ul`
  padding-left: 0;
  margin-top: 5%;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const CategoryButton = styled.button<StatisticsMode>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  padding-bottom: 15px;
  border-bottom: ${(props) => (props.statisticsMode === props.value ? '1px solid black' : 'none')};
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;
`;

export const StatisticsContentDiv = styled.div``;
