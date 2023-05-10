import styled, { keyframes } from 'styled-components';

const underline = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const SelectModeHeading = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 60px;
`;

export const ButtonGroupDiv = styled.div`
  width: 500px;
  height: 500px;
  background-color: #808080;
  border-radius: 5px;
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
export const LoginModeButton = styled.button`
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
