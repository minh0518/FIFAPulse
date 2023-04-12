import React, { createContext, useState, useContext } from 'react';
import { LoginContextValue } from '../../types/loginContext';

export const LoginContext = createContext<LoginContextValue | null>(null);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
  );
};

export function useLoginAPI() {
  return useContext(LoginContext);
}
