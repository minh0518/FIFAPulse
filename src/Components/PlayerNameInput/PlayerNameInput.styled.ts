import styled from 'styled-components';

interface IsHaveInputValue {
  isHaveInputValue: boolean;
}
export const InputSection = styled.div<IsHaveInputValue>`
  display: flex;
  padding: 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => (props.isHaveInputValue ? '16px 16px 0 0' : '16px 16px 16px 16px')};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

export const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: white;
  border: none;
  outline: none;
  font-size: 17px;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
`;
export const DropDownUl = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
  overflow-y: scroll;
  max-height: 300px;
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: forestgreen;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

interface MouseOverIndex {
  mouseOverIndex: number;
  listIndex: number;
}
export const DropDownList = styled.li<MouseOverIndex>`
  padding: 0 16px;
  background-color: ${(props) => (props.mouseOverIndex === props.listIndex ? `lightgray` : 'white')};
`;
