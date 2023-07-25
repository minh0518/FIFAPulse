import styled from 'styled-components';

export const SelectPostitionContainerDiv = styled.div``;

export const PostitionUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;
interface PositionIdProp {
  selectedPositionId: number | null;
  postionId: number | null;
}
export const PostitionList = styled.li<PositionIdProp>`
  flex: 1 1 20%;
  border: ${(props) => (props.selectedPositionId === props.postionId ? '2px solid red' : '1px solid #ccc')};
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
`;
