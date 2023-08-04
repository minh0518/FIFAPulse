import styled from 'styled-components';

export const PositionStatisticsContainerDiv = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1);
  border-radius: 40px;
  /* min-width: 500px;
  width: 40%; */
  width: 600px;
  margin-bottom: 50px;
  @media (max-width: 1670px) {
    width: 450px;
  }
`;

export const StatisticsDateParagraph = styled.p`
  padding: 15px 0 0 40px;
  font-size: 1.2rem;
  color: #4f526a;
`;

export const PositionAndMatchCount = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1rem;
  p {
    margin: 10px 0px 25px 0px;
  }
`;

export const StatisticsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1670px) {
    flex-wrap: wrap;
  }
`;

export const DetailDiv = styled.div`
  padding: 0px 5px 10px 5px;
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bolder;
  }
  @media (max-width: 1670px) {
    box-sizing: border-box;
    width: 40%;
  }
`;

export const DetailUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type DetailListProps = {
  isMax: boolean;
};
export const DetailList = styled.li<DetailListProps>`
  padding: 7px 0;
  border-bottom: 1px solid gray;
  color: ${(props) => (props.isMax ? 'green' : 'black')};
  font-weight: ${(props) => (props.isMax ? 'bolder' : '')};
`;
