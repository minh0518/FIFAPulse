import styled from 'styled-components';

export const SelectSeasonContainerDiv = styled.div`
  min-width: 450px;
`;

export const SeasonSelectUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  margin: 0;
`;

interface seasonIdProp {
  selectedSeasonId: number;
  seasonId: number;
}
export const SeasonList = styled.li<seasonIdProp>`
  flex: 1 1 10%;

  border: ${(props) => (props.seasonId === props.selectedSeasonId ? '2px solid red' : '1px solid #ccc')};
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
