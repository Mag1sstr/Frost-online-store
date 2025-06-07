import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Поиск по каталогу ..." />
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
