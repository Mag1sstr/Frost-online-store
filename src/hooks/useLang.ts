import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import translationsJson from "../../public/locales/translation.json";

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = translationsJson;
  return { lang, setLang, t };
}
