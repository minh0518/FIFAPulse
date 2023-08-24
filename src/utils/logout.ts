import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../firebase';

export const onLogoutClick = async (setIsNickNameExist: any, setUserObj: any, setIsNicknameChanged: any) => {
  setIsNickNameExist(null); // 모달 창에서 뒤로가기 선택하고 재 로그인시
  // 모달창 띄우는 useEffect를 실행하기 위해서 의존성 배열을 변경해야 하므로
  // 의도적으로 isNickNameExist를 초기값으로 세팅
  // (로그아웃 됐을 때 null -> 재로그인시 false로 변경돼서 useEffect 실행)

  setUserObj(null);
  localStorage.setItem('userObj', JSON.stringify(null));

  setIsNicknameChanged(false);
  localStorage.setItem('isNicknameChanged', JSON.stringify(false));

  // signOut(authService);
  // navigate('/', { replace: true });
};

export const tmp = '';
