import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { BsPersonCheckFill } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';
import {
  CurrentUserInfoDiv,
  GoogleLoginStatus,
  LogoButton,
  LogoutButton,
  Nav,
  NavIconsList,
  NavIconsUl,
  NavMenuLink,
  NavMenuList,
  NavMenuUl,
  NavbarLogo,
  UserInfoList,
} from './Navbar.styled';
import { authService } from '../../../firebase';
import { useUserObjAPI } from '../../Context/UserObj/UserObjContext';
import FIFAONLINELogo from '../../images/FIFAONLINELogo.png';
import GoggleLogo from '../../images/gooleImg.png';
import { NavBarProps } from '../../types/props';

const Navbar = ({ scrollPoint, page }: NavBarProps) => {
  const { userObj, setUserObj } = useUserObjAPI()!; // context로 관리하는 현재 로그인 중인 유저의 정보
  const navigate = useNavigate();
  const [isBrowserWidthHalf, setIsBrowserWidthHalf] = useState<boolean>(window.innerWidth < 1024);

  console.log(window.innerWidth < 1024);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsBrowserWidthHalf(true);
      }
      if (window.innerWidth > 1024) {
        setIsBrowserWidthHalf(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onLogoutClick = () => {
    // 로그아웃 로직은 여기서 진행하는 것이 아니라 ,
    // Firebase의 onAuthStateChanged가 사용되고 있는 곳에서 진행이 된다 (= 로그인/로그아웃 로직은 한 곳에서만 진행)
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

        {/* 1024픽셀보다 큰 경우에는 메뉴ul 안에 배치 */}
        {!isBrowserWidthHalf && (
          <UserInfoList>
            <CurrentUserInfoDiv>
              <span>
                {userObj?.googleUID === 'guest' ? (
                  <>
                    <BsPersonCheckFill /> &nbsp;게스트 모드
                  </>
                ) : (
                  <GoogleLoginStatus>
                    <img src={GoggleLogo} width={17} alt="googleLogo" />
                    &nbsp; 로그인
                  </GoogleLoginStatus>
                )}
              </span>
              <span>사용 ID : {userObj?.nickname}</span>
            </CurrentUserInfoDiv>
          </UserInfoList>
        )}
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

        {/* 1024픽셀보다 작은 경우에는 오른쪽 링크 ul에 배치 */}
        {isBrowserWidthHalf && (
          <UserInfoList>
            <CurrentUserInfoDiv>
              <span>
                {userObj?.googleUID === 'guest' ? (
                  <>
                    <BsPersonCheckFill /> &nbsp;게스트 모드
                  </>
                ) : (
                  <GoogleLoginStatus>
                    <img src={GoggleLogo} width={17} alt="googleLogo" />
                    &nbsp; 로그인
                  </GoogleLoginStatus>
                )}
              </span>
              <span>사용 ID : {userObj?.nickname}</span>
            </CurrentUserInfoDiv>
          </UserInfoList>
        )}
      </NavIconsUl>
    </Nav>
  );
};

export default Navbar;
// 홈(로그인모드 선택)
// 로그아웃
// 메인메뉴
