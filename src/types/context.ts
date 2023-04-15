export interface LoginContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalContextValue {
  isModalOpen: boolean;
  openModal: (children: React.ReactNode) => void;
  closeModal: () => void;
}
