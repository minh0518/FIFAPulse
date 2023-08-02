export interface IsNickNameChangedContextValue {
  isNicknameChanged: boolean;
  setIsNicknameChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalContextValue {
  isModalOpen: boolean;
  openModal: (children: React.ReactNode) => void;
  closeModal: () => void;
}

export interface userObjType {
  googleUID: string;
  FIFAOnlineAccessId: string;
  level: number;
  nickname: string;
}
export interface UserObjContextValue {
  userObj: userObjType | null;
  setUserObj: React.Dispatch<React.SetStateAction<userObjType | null>>;
}
