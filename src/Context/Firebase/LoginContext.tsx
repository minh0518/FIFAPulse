import React, { createContext, useState, useContext, useMemo } from 'react';
import { LoginContextValue } from '../../types/context';

export const LoginContext = createContext<LoginContextValue | null>(null);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const memoValue = useMemo(() => {
    return { isLoggedIn, setIsLoggedIn };
  }, [isLoggedIn]);

  return <LoginContext.Provider value={memoValue}>{children}</LoginContext.Provider>;
};

export function useLoginAPI() {
  return useContext(LoginContext);
}
