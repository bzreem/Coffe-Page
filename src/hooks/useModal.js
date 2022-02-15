import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => setIsOpen(true);

  const closenModal = () => setIsOpen(false);

  const openModalStopEventDefault = (e) => {
    e.preventDefault();
    openModal();
  };

  return [isOpen, openModal, closenModal, openModalStopEventDefault];
};

export default useModal;
