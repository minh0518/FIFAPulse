import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBarProps } from '../../types/props';

export const Nav = styled.nav<NavBarProps>`
  width: 100%;
  min-width: 700px;
  height: 80px; // 높이 고정
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    height: auto;
  }

  // 조건부 스타일링
  position: ${(props) => (props.page === 'MainSelect' ? 'fixed' : '')};
  z-index: ${(props) => (props.page === 'MainSelect' ? 600 : '')};
  background-color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.31 ? 'transparent' : 'white')};
  color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.31 ? 'white' : 'black')};
  box-shadow: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.31 ? '' : '0px 5px 15px rgba(0,0,0,0.2)')};
  // props.scrollPoint && 으로 해버리면 scrollPoint가 0일때 최상단을 의미하므로 이대로 작동해야 하는데
  // JS에서는 falsy로 작동하므로 적용이 안 돼버림. 그러므로 !==undefined 조건으로 사용
`;

export const NavbarLogo = styled.div`
  background-color: transparent;
`;
export const LogoButton = styled.button`
  font-family: 'Gugi', cursive;
  font-size: 2rem;
  text-decoration: none;
  border: none;
  background-color: transparent; /* 직접 지정해 줘야 부모컴포넌트의 NavbarLogo->Nav 색상을 따라감 */
  color: inherit; /* 직접 지정해 줘야 부모컴포넌트의 NavbarLogo->Nav 색상을 따라감 */
  cursor: pointer;
`;

export const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavMenuList = styled.li`
  &:hover {
    background-color: forestgreen;
    border-radius: 2px;
    transform: translateY(-5px);
  }
  // 글자 중앙 배치
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
`;

export const NavMenuLink = styled(Link)`
  //각 메뉴 안의 글자를 버튼의 중앙에 배치
  display: flex;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 1240px) {
    padding: 0px 40px;
  }

  @media (max-width: 1024px) {
    padding: 10px 60px;
  }
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  // font-weight: 600;
  color: inherit; /* Nav 컴포넌트의 글씨 색상을 사용 */
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  // 글자 중앙 배치
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  padding: 0 60px;
  cursor: pointer;
  @media (max-width: 1240px) {
    padding: 0px 40px;
  }
  @media (max-width: 1024px) {
    padding: 10px 60px;
  }
`;

export const NavIconsUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const NavIconsList = styled.li`
  button {
    border: none;
    background-color: transparent;
  }
  img {
    cursor: pointer;
  }
`;

export const UserInfoList = styled.li``;

export const CurrentUserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  & :nth-child(1) {
  }
  & :nth-child(2) {
    font-weight: bolder;
  }
`;

export const GoogleLoginStatus = styled.div`
  display: flex;
  align-items: center;
`;
