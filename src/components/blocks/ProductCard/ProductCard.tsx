import type { IProductData } from "../../../types/interfaces";
import styles from "./ProductCard.module.scss";
import stub from "../../../images/other/stub.png";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, price, available }: IProductData) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/products/${id}`)} className={styles.card}>
      <div className={styles.img}>
        <img src={stub} alt="" />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>{name}</p>
        <div className={styles.row}>
          {price} тг
          <button onClick={(e) => e.stopPropagation()} className={styles.btn}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
