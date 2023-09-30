import { BsPersonCheckFill } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';

type IsModalOpen = {
  isModalOpen: boolean;
};

const underline = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

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

export const ChooseModeAndLoginContainerDiv = styled.div<IsModalOpen>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // 그냥 height줘도 상관은 없어보임
  flex-direction: column;
  // background-color: ${({ isModalOpen }) => (isModalOpen ? '#a9a9a9' : '#e9ebee')};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  video {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -1;
  }
`;

export const ProjectNameDiv = styled.h1`
  & > p:nth-child(1) {
    font-family: 'Gugi', cursive;
    font-size: 5rem;
    text-align: center;
    margin: 0;
  }
  & > p:nth-child(2) {
    margin: 50px 0;
    font-size: 4rem;
  }
`;

export const AfterLoginDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BeforeLoginDiv = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
`;

export const UseLoginModeButton = styled.button`
  cursor: pointer;
  max-width: 500px;
  min-width: 370px;
  height: 55px;
  font-size: 2rem;
  border: none;
  color: black;
  background-color: transparent;
  span {
    font-size: 1rem;
  }
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 0;
    width: 0;
    height: 1px;
    background: black;
    transition: width 0.3s;
  }

  &:hover:after {
    animation: ${underline} 0.3s forwards;
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

export const LoginButton = styled.button`
  font-family: 'Dongle', sans-serif;
  display: flex;
  align-items: center;
  height: 55px;
  justify-content: center;
  cursor: pointer;
  min-width: 200px;
  border: none;
  border-radius: 20px;
  color: gray;
  background-color: #25c7f5;
  margin-right: 100px;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
  p {
    font-size: 3rem;
    font-weight: bolder;
    margin-left: 10px;
    color: white;
  }
`;

export const GuestModeButton = styled.button`
  font-family: 'Dongle', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 55px;
  justify-content: center;
  min-width: 200px;
  border: none;
  border-radius: 20px;
  color: gray;
  background-color: #25c7f5;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
  p {
    font-size: 3rem;
    font-weight: bolder;
    margin-left: 10px;
    color: white;
  }
`;
