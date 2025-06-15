import { useModals } from "../../../contexts/ModalsContext";
import type { IProduct, IProductData } from "../../../types/interfaces";
import styles from "./BuyModal.module.scss";

interface IProps {
  product: IProductData | IProduct | null;
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
        <div className={styles.close} onClick={() => setOpenBuyModal(false)}>
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
