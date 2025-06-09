import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";
import { useLang } from "../../../hooks/useLang";

function Search() {
  const { t, lang } = useLang();
  return (
    <div className={styles.search}>
      <input type="text" placeholder={t[lang].header.search} />
      <div className={styles.line}></div>
      <img src={search} alt="search" />
      <div className={styles.drop}>
        <ul className={styles.col}>
          <li>Товар</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
