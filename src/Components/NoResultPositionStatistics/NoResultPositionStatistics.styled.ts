import styled from 'styled-components';

export const NoResultPositionStatisticsContainerDiv = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1);
  align-self: center;
  border-radius: 40px;
  width: 500px;
  margin-bottom: 50px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PositionAndMatchCount = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1rem;
`;

export const NoResultMessage = styled.p`
  font-weight: bolder;
  color: red;
  b {
    color: black;
  }
`;
