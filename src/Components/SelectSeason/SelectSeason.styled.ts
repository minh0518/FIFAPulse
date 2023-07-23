import styled from 'styled-components';

export const PositionGuideContainerDiv = styled.div`
  width: 70%;
  // margin: 0 auto 10% auto;
  margin: 0 auto;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
  border-bottom: 1px solid black;
`;

export const DescriptionParagraph = styled.p`
  color: gray;
  font-size: 1.5rem;
  span {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const PlayerSearchSection = styled.div`
  display: flex;
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
