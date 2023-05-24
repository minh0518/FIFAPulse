import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { LogoButton, LogoutButton, Nav, NavIconsList, NavIconsUl, NavMenuLink, NavMenuList, NavMenuUl, NavbarLogo } from './Navbar.styled';
import { authService } from '../../../firebase';
import { NavBarProps } from '../../types/props';

const Navbar = ({ scrollPoint, page }: NavBarProps) => {
  const navigate = useNavigate();

  console.log(scrollPoint, page);
  const onLogoutClick = () => {
    signOut(authService);
    navigate('/', { replace: true });
  };

  return (
    <Nav scrollPoint={scrollPoint} page={page}>
      <NavbarLogo>
        <LogoButton type="button">FIFAPulse</LogoButton>
      </NavbarLogo>

      <NavMenuUl>
        <NavMenuList>
          <NavMenuLink to="/">HOME</NavMenuLink>
          {/* <NavMenuBuuton type="button">HOME</NavMenuBuuton> */}
        </NavMenuList>
        <NavMenuList>
          <NavMenuLink to="/main-select">MAIN MENU</NavMenuLink>
          {/* <NavMenuBuuton type="button">MAIN MENU</NavMenuBuuton> */}
        </NavMenuList>
        <NavMenuList>
          <NavMenuLink to="/">NOTICE</NavMenuLink>
          {/* <NavMenuBuuton type="button">NOTICE</NavMenuBuuton> */}
        </NavMenuList>
        <NavMenuList>
          <LogoutButton type="button" onClick={onLogoutClick} style={{ color: 'tomato' }}>
            LOGOUT
          </LogoutButton>
        </NavMenuList>
      </NavMenuUl>

      <NavIconsUl>
        <NavIconsList>SNS</NavIconsList>
      </NavIconsUl>
    </Nav>
  );
};

export default Navbar;
// 홈(로그인모드 선택)
// 로그아웃
// 메인메뉴
