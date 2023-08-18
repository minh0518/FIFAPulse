import styled from 'styled-components';

export const PositionGuideContainerDiv = styled.div`
  width: 70%;
  // margin: 0 auto 10% auto;
  margin: 0 auto;
`;

export const SearchSection = styled.div`
  min-width: 450px;
  display: flex;
  margin: 50px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const PlayerNameAndPostion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 80px;
`;

export const SeasonSelectUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

interface seasonIdProp {
  selectedSeasonId: number;
  seasonId: number;
}
export const SeasonList = styled.li<seasonIdProp>`
  flex: 1 1 16%;
  border: ${(props) => (props.seasonId === props.selectedSeasonId ? '1px solid red' : '1px solid #ccc')};
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const PositionStatisticsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
