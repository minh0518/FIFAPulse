import React, { createContext, useState, useContext, useMemo } from 'react';
import { userObjType, UserObjContextValue } from '../../types/context';

export const UserObjContext = createContext<UserObjContextValue | null>(null);

export const UserObjProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageUserObj = JSON.parse(localStorage.getItem('userObj')!);
  const [userObj, setUserObj] = useState<userObjType | null>(localStorageUserObj);

  const memoValue = useMemo(() => {
    return { userObj, setUserObj };
  }, [userObj]);

  return <UserObjContext.Provider value={memoValue}>{children}</UserObjContext.Provider>;
};

export function useUserObjAPI() {
  return useContext(UserObjContext);
}
