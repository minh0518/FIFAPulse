import React, { createContext, useState, useContext } from 'react';
import { userObjType, UserObjContextValue } from '../../types/context';

export const UserObjContext = createContext<UserObjContextValue | null>(null);

export const UserObjProvider = ({ children }: { children: React.ReactNode }) => {
  const [userObj, setUserObj] = useState<userObjType | null>(null);

  return <UserObjContext.Provider value={{ userObj, setUserObj }}>{children}</UserObjContext.Provider>;
};

export function useUserObjAPI() {
  return useContext(UserObjContext);
}
