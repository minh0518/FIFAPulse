export interface LoginContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalContextValue {
  isModalOpen: boolean;
  openModal: (children: React.ReactNode) => void;
  closeModal: () => void;
}

export interface userObjType {
  googleUID: string;
  accessId: string;
  level: number;
  nickname: string;
}
export interface UserObjContextValue {
  userObj: userObjType | null;
  setUserObj: React.Dispatch<React.SetStateAction<userObjType | null>>;
}
