import { createContext, useState } from "react";

export enum EnumLang {
  RU = "ru",
  EN = "en",
}

interface ILangContext {
  lang: EnumLang;
  setLang: (fn: (prev: EnumLang) => EnumLang) => void;
}

export const LangContext = createContext({} as ILangContext);

export default function LangContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-expect-error because it returns a string
  const getCurrentLang: EnumLang = localStorage.getItem("lang");

  const [lang, setLang] = useState<EnumLang>(getCurrentLang ?? EnumLang.RU);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
