import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { LogoButton, LogoutButton, Nav, NavIconsList, NavIconsUl, NavMenuLink, NavMenuList, NavMenuUl, NavbarLogo } from './Navbar.styled';
import { authService } from '../../../firebase';
import FIFAONLINELogo from '../../images/FIFAONLINELogo.png';
import { NavBarProps } from '../../types/props';

const Navbar = ({ scrollPoint, page }: NavBarProps) => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    signOut(authService);
    navigate('/', { replace: true });
  };

  const onNexonClick = () => {
    window.location.href = 'https://www.nexon.com/Home/Game';
  };
  const onFIFAONLINEClick = () => {
    window.location.href = 'https://fifaonline4.nexon.com/main/index';
  };

  return (
    <Nav scrollPoint={scrollPoint} page={page}>
      <NavbarLogo>
        <LogoButton type="button">
          {/* <img src={FIFAPulseLogo} alt="FIFAPulseLogo" width={150} height={120} /> */}
          FIFAPulse
        </LogoButton>
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
        {/* <NavMenuList>
          <NavMenuLink to="#">NOTICE</NavMenuLink>
        </NavMenuList> */}
        <NavMenuList>
          <LogoutButton type="button" onClick={onLogoutClick} style={{ color: 'tomato' }}>
            LOGOUT
          </LogoutButton>
        </NavMenuList>
      </NavMenuUl>

      <NavIconsUl>
        <NavIconsList>
          <button type="button" onClick={onNexonClick}>
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTVfNSAg/MDAxNTkyMTgyNDEyNDY1.6uOcgbBt7uyfJoP7Isu2__PSb63AzYrzDzRUiCBL_tAg.VyrxZ3A5-ZCspiKWq6htiSibInzMNfF8-ws987lUrCEg.PNG.kueric12/NEXON-LOGO.png?type=w800"
              alt="nexon"
              width={70}
            />
          </button>
          <button type="button" onClick={onFIFAONLINEClick}>
            <img src={FIFAONLINELogo} alt="nexon" width={140} />
          </button>
        </NavIconsList>
      </NavIconsUl>
    </Nav>
  );
};

export default Navbar;
// 홈(로그인모드 선택)
// 로그아웃
// 메인메뉴
