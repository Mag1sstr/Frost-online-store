import styles from "./LanguageSwitch.module.scss";
import { EnumLang } from "../../../contexts/LangContext";
import { useLang } from "../../../hooks/useLang";
import worldImg from "../../../images/header/world.png";

function LanguageSwitch() {
  const { lang, setLang } = useLang();

  const changeLang = () => {
    setLang((prev) => (prev === EnumLang.RU ? EnumLang.EN : EnumLang.RU));
    localStorage.setItem(
      "lang",
      lang === EnumLang.RU ? EnumLang.EN : EnumLang.RU
    );
  };
  return (
    <div onClick={changeLang} className={styles.switch}>
      <img src={worldImg} alt="language" />
      {lang.toUpperCase()}
    </div>
  );
}

export default LanguageSwitch;
