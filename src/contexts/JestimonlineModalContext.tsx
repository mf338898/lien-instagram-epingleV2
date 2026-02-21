"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { JestimonlineModal } from "@/components/JestimonlineModal";

type JestimonlineModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const JestimonlineModalContext = createContext<
  JestimonlineModalContextType | undefined
>(undefined);

export function JestimonlineModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <JestimonlineModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <JestimonlineModal isOpen={isOpen} onClose={closeModal} />
    </JestimonlineModalContext.Provider>
  );
}

export function useJestimonlineModal() {
  const context = useContext(JestimonlineModalContext);
  if (context === undefined) {
    throw new Error(
      "useJestimonlineModal must be used within a JestimonlineModalProvider"
    );
  }
  return context;
}
