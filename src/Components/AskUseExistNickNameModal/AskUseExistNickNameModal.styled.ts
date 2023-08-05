import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% { //살짝 커졌다 작아져야 보다 생동감 있는 애니메이션이 구현된다
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

export const ModalDiv = styled.div`
  z-index: 1; // 비디오 위에 보여줘야 하므로
  background-color: red;
  position: absolute;

  top: 50%;
  min-width: 455px;
  min-height: 380px;
  left: 50%;
  border: 2px solid lightgray;
  border-radius: 15px;
  background-color: #eee;
  transform: translate(-50%, -50%) scale(1);
  animation: ${modalAnimation} 0.2s ease-out;
`;

export const ModalContentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`;

export const DiscriptionHeading = styled.h2`
  font-weight: bold;
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
