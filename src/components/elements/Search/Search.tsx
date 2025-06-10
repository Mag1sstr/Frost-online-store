import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";
import { useLang } from "../../../hooks/useLang";
import { useState } from "react";
import { useGetProductsQuery } from "../../../api/api";
import { useDebounce } from "../../../hooks/useDebounce";
import { Link } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const debounceSearchValue = useDebounce(searchValue);

  const { t, lang } = useLang();
  const { data } = useGetProductsQuery({
    page: 1,
    size: 18,
  });

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder={t[lang].header.search}
      />
      <div className={styles.line}></div>
      <img src={search} alt="search" />
      <div className={`${styles.drop} ${searchValue.trim() && styles.open}`}>
        <ul className={styles.col}>
          {data?.items
            ?.filter((el) =>
              el.name
                .trim()
                .toLowerCase()
                .includes(debounceSearchValue.trim().toLowerCase())
            )
            .map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                <div className={styles.item}>{item.name}</div>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
