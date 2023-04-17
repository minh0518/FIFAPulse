import React, { createContext, useContext, useState } from 'react';
import { ModalContextValue } from '../../types/context';

export const ModalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState((<></>) as React.ReactNode);

  const openModal = (children: React.ReactNode) => {
    setIsModalOpen(true);
    setModalContents(children);
  };

  const closeModal = () => setIsModalOpen(false);

  const onDimmerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;

    closeModal();
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && <div onClick={onDimmerClick}>{modalContents}</div>}
    </ModalContext.Provider>
  );
};

export function useModalAPI() {
  return useContext(ModalContext);
}
