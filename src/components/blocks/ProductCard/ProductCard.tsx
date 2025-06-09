import type { IProductData } from "../../../types/interfaces";
import styles from "./ProductCard.module.scss";
import stub from "../../../images/other/stub.png";

function ProductCard({ id, name, price, available }: IProductData) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={stub} alt="" />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>{name}</p>
        <div className={styles.row}>
          {price} тг <button className={styles.btn}>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
