import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBarProps } from '../../types/props';

export const Nav = styled.nav<NavBarProps>`
  width: 100%;
  height: 80px; // 높이 고정
  display: flex;
  justify-content: space-around;
  align-items: center;

  // 조건부 스타일링
  position: ${(props) => (props.page === 'MainSelect' ? 'fixed' : '')};
  z-index: ${(props) => (props.page === 'MainSelect' ? 600 : '')};
  background-color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? 'transparent' : 'white')};
  color: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? 'white' : 'black')};
  box-shadow: ${(props) => (props.scrollPoint !== undefined && props.scrollPoint < 0.25 ? '' : '0px 5px 15px rgba(0,0,0,0.2)')};
  // props.scrollPoint && 으로 해버리면 scrollPoint가 0일때 최상단을 의미하므로 이대로 작동해야 하는데
  // JS에서는 falsy로 작동하므로 적용이 안 돼버림. 그러므로 !==undefined 조건으로 사용
`;

export const NavbarLogo = styled.div`
  font-size: 24px;
  background-color: transparent;
`;
export const LogoButton = styled.button`
  font-size: inherit;
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
`;

export const NavMenuList = styled.li`
  &:hover {
    background-color: forestgreen;
    border-radius: 2px;
    transform: translateY(-5px);
  }

  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0 4em;
`;

export const LogoutButton = styled.button`
  padding: 10px 12px; // Link태그와 button태그가 기본적으로 가지는
  //컨텐트의 높이가 다르므로 어쩔 수 없이 button태그의
  // padding을 8px 12px;가 아닌 10px 12px로 수정(총 높이가 위아래 2px씩 증가)
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  // font-weight: 600;
  cursor: pointer;
`;
export const NavMenuLink = styled(Link)`
  //각 메뉴 안의 글자를 버튼의 중앙에 배치
  display: flex;
  align-items: center;

  padding: 8px 12px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  // font-weight: 600;
  color: inherit; /* Nav 컴포넌트의 글씨 색상을 사용 */
  cursor: pointer;
`;

export const NavIconsUl = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
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
