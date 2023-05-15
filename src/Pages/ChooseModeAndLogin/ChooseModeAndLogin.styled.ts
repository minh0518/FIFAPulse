import styled, { keyframes } from 'styled-components';

type IsModalOpen = {
  isModalOpen: boolean;
};

type IsLoggedIn = {
  isLoggedIn: boolean;
};

const underline = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9) translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const ContainerDiv = styled.div<IsModalOpen>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background-color: ${({ isModalOpen }) => (isModalOpen ? '#a9a9a9' : '#eee')};
`;

export const SelectModeHeading = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 60px;
`;

export const GuestModeButton = styled.button`
  width: 300px;
  height: 250px;
  margin-right: 100px;
  border-radius: 20px;
  font-size: 2rem;
  border: 1px solid gray;
  color: gray;
  background-color: transparent;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 40%;
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
export const LoginModeButton = styled.button<IsLoggedIn>`
  min-width: 300px;
  height: 250px;
  font-size: 2rem;
  border-radius: 20px;
  border: 1px solid gray;
  color: gray;
  background-color: transparent;
  span {
    font-size: 1.1rem;
  }
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 40%;
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
  position: absolute;
  top: 45%;
  height: 30%;
  left: 50%;
  padding: 20px;
  /* border: none; */
  border: 2px solid forestgreen;
  border-radius: 15px;
  background-color: #eee;
  transform: translate(-50%, -50%);

  // 애니메이션을 추가합니다.
  animation: ${fadeIn} 0.3s ease-out;
`;
