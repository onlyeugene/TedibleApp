// hooks/useModal.ts
import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal((prev) => !prev);
  };

  return { modal, handleOpenModal };
};