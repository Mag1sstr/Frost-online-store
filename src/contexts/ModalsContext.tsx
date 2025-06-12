import { createContext, useContext, useState } from "react";

interface IModalsContext {
  openRegisterModal: boolean;
  setOpenRegisterModal: (open: boolean) => void;
  openBuyModal: boolean;
  setOpenBuyModal: (open: boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
        openBuyModal,
        setOpenBuyModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalsContext);
}
