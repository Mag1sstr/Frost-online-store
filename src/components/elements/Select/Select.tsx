import styles from "./Select.module.scss";
import arrow from "../../../images/categories/arrow.svg";
import { useEffect, useState } from "react";
import type { IItems } from "../../../types/interfaces";
import { useLang } from "../../../hooks/useLang";

interface IProps {
  name?: string;
  title?: string;
  data?: IItems[];
  onChange?: (id: number) => void;
}

function Select({ name, title, data, onChange }: IProps) {
  const [selectName, setSelectName] = useState(title);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectName(title);
  }, [title, data]);

  const { t, lang } = useLang();
  const handleDrop = () => {
    if (
      (!data?.length && name === t[lang].filters.model) ||
      (!data?.length && name === t[lang].filters.gen)
    ) {
      setError(true);
    } else {
      setError(false);
      setOpen((prev) => !prev);
    }
  };

  return (
    <div onClick={handleDrop} className={styles.wrapper}>
      {name && <p>{name}</p>}

      {error && <div className={styles.error}>Не выбрана марка или модель</div>}
      <div className={`${styles.select} ${open && styles.open}`}>
        {selectName}
        <img src={arrow} alt="" />
        <div className={styles.drop}>
          {data &&
            [...data, { id: -1, name: title }].map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onChange!(item.id);
                  setSelectName(item.name);
                }}
                className={styles.item}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
