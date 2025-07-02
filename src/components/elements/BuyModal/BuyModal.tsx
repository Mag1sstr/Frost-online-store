import { useState } from "react";
import { useModals } from "../../../contexts/ModalsContext";
import type { IProduct, IProductData } from "../../../types/interfaces";
import styles from "./BuyModal.module.scss";
import { useAddToCartMutation } from "../../../api/api";
import { toast } from "react-toastify";
import { useLang } from "../../../hooks/useLang";

interface IProps {
  product: IProductData | IProduct | null;
}

function BuyModal({ product }: IProps) {
  const [count, setCount] = useState(1);
  const { openBuyModal, setOpenBuyModal } = useModals();
  const [addToCart] = useAddToCartMutation();
  const { t, lang } = useLang();

  const handleAddToCart = () => {
    if (product?.available === 1) {
      addToCart({ count, productId: product.id }).then(() => {
        setOpenBuyModal(false);
        toast.success(t[lang].toast.add_cart);
      });
    } else {
      toast.error(t[lang].toast.not_available);
    }
  };

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
            <button
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
              className={styles.counter__btn}
            >
              -
            </button>
            <div className={styles.count}>{count}</div>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className={styles.counter__btn}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.col}>
          <button onClick={handleAddToCart} className={styles.btn}>
            Добавить в корзину
          </button>
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
