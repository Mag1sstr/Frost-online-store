import styles from "./Select.module.scss";
import arrow from "../../../images/categories/arrow.svg";
import { useState } from "react";

interface IProps {
  name?: string;
  title?: string;
  data?: [];
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
          <div onClick={() => setSelectName("21313")} className={styles.item}>
            1331313
          </div>
          <div className={styles.item}>1331313</div>
          <div className={styles.item}>1331313</div>
          <div className={styles.item}>1331313</div>
        </div>
      </div>
    </div>
  );
}

export default Select;
