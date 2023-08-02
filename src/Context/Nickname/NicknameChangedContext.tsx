import React, { createContext, useState, useContext, useMemo } from 'react';
import { IsNickNameChangedContextValue } from '../../types/context';

export const IsNickNameChangedContext = createContext<IsNickNameChangedContextValue | null>(null);

export const IsNicknameChangedProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageIsNicknameChanged = JSON.parse(localStorage.getItem('isNicknameChanged')!);

  // isNicknameChanged는 계속 true/false로 업뎃하므로 초깃값으로 null값이 될 리가 없기에 useState의 타입추론 사용
  const [isNicknameChanged, setIsNicknameChanged] = useState(localStorageIsNicknameChanged);
  const memoValue = useMemo(() => {
    return { isNicknameChanged, setIsNicknameChanged };
  }, [isNicknameChanged]);

  return <IsNickNameChangedContext.Provider value={memoValue}>{children}</IsNickNameChangedContext.Provider>;
};

export function useNickNameChangedAPI() {
  return useContext(IsNickNameChangedContext);
}
