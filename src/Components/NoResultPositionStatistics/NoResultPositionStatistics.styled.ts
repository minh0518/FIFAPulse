import styled from 'styled-components';

export const NoResultPositionStatisticsContainerDiv = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1);
  border-radius: 40px;
  min-width: 500px;
  margin-bottom: 50px;
`;

export const PositionAndMatchCount = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1rem;
  align-items: center;
`;

export const NoResultMessage = styled.p`
  font-weight: bolder;
  color: red;
`;
