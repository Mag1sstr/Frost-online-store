import styles from "./Select.module.scss";
import arrow from "../../../images/categories/arrow.svg";
import { useState } from "react";
import type { IItems } from "../../../types/interfaces";

interface IProps {
  name?: string;
  title?: string;
  data?: IItems[];
}

function Select({ name, title, data }: IProps) {
  const [selectName, setSelectName] = useState(title);
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen((prev) => !prev)} className={styles.wrapper}>
      <p>{name}</p>
      <div className={`${styles.select} ${open && styles.open}`}>
        {selectName}
        <img src={arrow} alt="" />
        <div className={styles.drop}>
          {data?.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectName(item.name)}
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
