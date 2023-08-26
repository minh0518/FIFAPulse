import styled from 'styled-components';

export const OtherUserNicknameInputContainerDiv = styled.div`
  padding-right: 50px;
  margin-top: 100px;
  width: 300px;
`;
export const InputParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const InputForm = styled.form`
  display: flex;
  justify-content: space-between;

  & :nth-child(1) {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-size: 20px;
    border: none;
  }
  & :nth-child(2) {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
  }
`;
