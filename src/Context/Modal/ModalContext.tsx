import React, { createContext, useContext, useMemo, useState } from 'react';
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

  const memoValue = useMemo(() => {
    return { isModalOpen, openModal, closeModal };
  }, [isModalOpen]);
  return (
    <ModalContext.Provider value={memoValue}>
      {children}
      {isModalOpen && <div>{modalContents}</div>}
    </ModalContext.Provider>
  );
};

export function useModalAPI() {
  return useContext(ModalContext);
}
