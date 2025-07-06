import { createContext, useContext, useState } from "react";

interface IModalsContext {
  openRegisterModal: boolean;
  setOpenRegisterModal: (open: boolean) => void;
  openLoginModal: boolean;
  setOpenLoginModal: (open: boolean) => void;
  openBuyModal: boolean;
  setOpenBuyModal: (open: boolean) => void;
  openMobileSearch: boolean;
  setOpenMobileSearch: (open: boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
        openBuyModal,
        setOpenBuyModal,
        openMobileSearch,
        setOpenMobileSearch,
        openLoginModal,
        setOpenLoginModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalsContext);
}
