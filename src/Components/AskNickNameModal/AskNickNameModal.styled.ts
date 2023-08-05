import styled from 'styled-components';

export const ModalContentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`;

export const DiscriptionHeading = styled.h2`
  font-family: 'Dongle', sans-serif;
  font-size: 3rem;
  letter-spacing: 2px;
`;

export const TestID = styled.p`
  font-family: 'Dongle', sans-serif;
  font-size: 2.1rem;
  letter-spacing: 2px;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 60px;
  width: 100%;
`;

export const NickNameInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NickNameInput = styled.input`
  width: 50%;
  height: 30px;
  margin-top: 7%;
  margin-bottom: 5%;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: 2px solid forestgreen;
  }
`;

export const SubmitInput = styled.input`
  height: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 0 0 0.5px #000;
  width: 35%;
  cursor: pointer;
  color: forestgreen;
  font-weight: bolder;
  font-size: 1.2rem;
  margin-left: 15%;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease;
`;

export const GoBackButton = styled.button`
  height: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 0 0 0.5px black;
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
