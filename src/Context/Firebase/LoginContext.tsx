import React, { createContext, useState, useContext, useMemo } from 'react';
import { LoginContextValue } from '../../types/context';

export const LoginContext = createContext<LoginContextValue | null>(null);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')!);

  // isLoggedIn는 계속 true/false로 업뎃하므로 초깃값으로 null값이 될 리가 없기에 useState의 타입추론 사용
  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsLoggedIn);
  const memoValue = useMemo(() => {
    return { isLoggedIn, setIsLoggedIn };
  }, [isLoggedIn]);

  return <LoginContext.Provider value={memoValue}>{children}</LoginContext.Provider>;
};

export function useLoginAPI() {
  return useContext(LoginContext);
}
