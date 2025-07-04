import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";
import { useLang } from "../../../hooks/useLang";
import { useState } from "react";
import { useGetProductsQuery } from "../../../api/api";
import { useDebounce } from "../../../hooks/useDebounce";
import { Link } from "react-router-dom";
import { useModals } from "../../../contexts/ModalsContext";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

interface IProps {
  mobile?: boolean;
}

function Search({ mobile = false }: IProps) {
  const [searchValue, setSearchValue] = useState("");

  const debounceSearchValue = useDebounce(searchValue);
  const { setOpenMobileSearch } = useModals();
  const windowWidth = useWindowWidth();

  const { t, lang } = useLang();
  const { data } = useGetProductsQuery({
    page: 1,
    size: 18,
  });

  if (windowWidth > 650) {
    setOpenMobileSearch(false);
  }

  return (
    <>
      {mobile ? (
        <div className={styles.mobile}>
          <input type="text" placeholder="Поиск по каталогу ..." />

          <div onClick={() => setOpenMobileSearch(false)}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L8.5 8.5M16 1L8.5 8.5M8.5 8.5L16 16M8.5 8.5L1 1"
                stroke="#C9C9C9"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className={styles.search}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder={t[lang].header.search}
          />
          <div className={styles.line}></div>
          <img src={search} alt="search" />
          <div
            className={`${styles.drop} ${searchValue.trim() && styles.open}`}
          >
            <ul className={styles.col}>
              {data?.items
                ?.filter((el) =>
                  el.name
                    .trim()
                    .toLowerCase()
                    .includes(debounceSearchValue.trim().toLowerCase())
                )
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/products/${item.id}`}
                    onClick={() => setSearchValue("")}
                  >
                    <div className={styles.item}>{item.name}</div>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
