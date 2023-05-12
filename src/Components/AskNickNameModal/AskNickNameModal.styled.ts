import styled from 'styled-components';

export const ModalContentDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiscriptionHeading = styled.h3`
  font-weight: bold;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 50px;
`;

export const NickNameInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NickNameInput = styled.input`
  width: 50%;
  height: 30px;
`;

export const SubmitInput = styled.input`
  background-color: forestgreen;
  border-radius: 5px;
  border: none;
  width: 35%;
  cursor: pointer;
  color: white;
  margin-left: 30px;
  font-weight: bolder;
  font-size: 1.2rem;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;
`;

export const GoBackButton = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 0 0 0.5px #000;
  width: 35%;
  cursor: pointer;
  color: black;
  font-weight: bolder;
  font-size: 1.2rem;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;
`;
