import { createContext, useState } from "react";

export enum EnumLang {
  RU = "ru",
  EN = "en",
}

interface ILangContext {
  lang: EnumLang;
  setLang: (lang: EnumLang) => void;
}

export const LangContext = createContext({} as ILangContext);

export default function LangContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<EnumLang>(EnumLang.RU);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
