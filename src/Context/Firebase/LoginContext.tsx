import React, { createContext, useState, useContext } from 'react';

export const LoginContext = createContext<any | null>(null);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
  );
};

export function useLoginAPI() {
  return useContext(LoginContext);
}
