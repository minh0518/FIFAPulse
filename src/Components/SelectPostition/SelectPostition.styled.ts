import styled from 'styled-components';

export const SelectPostitionContainerDiv = styled.div``;

export const PostitionUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;
interface PositionIdProp {
  confirmedPositionId: number[];
  postionId: number;
}
export const PostitionList = styled.li<PositionIdProp>`
  flex: 1 1 20%;
  border: ${(props) => (props.confirmedPositionId.includes(props.postionId) ? '2px solid red' : '1px solid #ccc')};
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
`;

export const SelectCountMessageParagraph = styled.p`
  color: #017859;
  font-weight: bold;
`;
