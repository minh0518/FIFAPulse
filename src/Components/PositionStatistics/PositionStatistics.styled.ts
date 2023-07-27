import styled from 'styled-components';

export const PositionStatisticsContainerDiv = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1);
  border-radius: 40px;
  /* min-width: 500px;
  width: 40%; */
  width: 500px;
  margin-bottom: 50px;
`;

export const StatisticsDateParagraph = styled.p`
  padding: 40px 0 0 40px;
  font-size: 1.2rem;
  color: #4f526a;
`;

export const PositionAndMatchCount = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1rem;
`;

export const StatisticsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1 1 50%;
`;

export const DetailDiv = styled.div`
  margin: 20px 50px 30px 50px;
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bolder;
  }
`;

export const DetailUl = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    padding: 10px 0;
    border-bottom: 1px solid gray;
  }
`;

export const DetailList = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid gray;
`;
