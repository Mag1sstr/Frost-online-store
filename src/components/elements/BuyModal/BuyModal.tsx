import { useModals } from "../../../contexts/ModalsContext";
import type { IProductData } from "../../../types/interfaces";
import styles from "./BuyModal.module.scss";

interface IProps {
  product: IProductData | null;
}

function BuyModal({ product }: IProps) {
  const { openBuyModal, setOpenBuyModal } = useModals();

  const addToCart = () => {};
  return (
    <div
      onMouseDown={() => {
        setOpenBuyModal(false);
      }}
      className={`${styles.wrapper} ${openBuyModal && styles.open}`}
    >
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        <p className={styles.title}>Добавление в корзину</p>
        <p className={styles.text}>{product?.name}</p>
        <div className={styles.row}>
          Укажите количество:
          <div className={styles.counter}>
            <button className={styles.counter__btn}>-</button>
            <div className={styles.count}>1</div>
            <button className={styles.counter__btn}>+</button>
          </div>
        </div>
        <div className={styles.col}>
          <button className={styles.btn}>Добавить в корзину</button>
          <button
            onClick={() => setOpenBuyModal(false)}
            className={styles.second}
          >
            Продолжить выбор товаров
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
