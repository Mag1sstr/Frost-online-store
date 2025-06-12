import type { IProductData } from "../../../types/interfaces";
import styles from "./ProductCard.module.scss";
import stub from "../../../images/other/stub.png";
import { useNavigate } from "react-router-dom";
import { useModals } from "../../../contexts/ModalsContext";
import type { MouseEvent } from "react";
import { useLang } from "../../../hooks/useLang";

interface IProps extends IProductData {
  onSelect: (item: IProductData) => void;
}

function ProductCard({ id, name, price, available, onSelect }: IProps) {
  const navigate = useNavigate();

  const { setOpenBuyModal } = useModals();
  const { t, lang } = useLang();

  const handleBuy = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenBuyModal(true);
    onSelect({ id, name, price, available });
  };
  return (
    <div onClick={() => navigate(`/products/${id}`)} className={styles.card}>
      <div className={styles.img}>
        <img src={stub} alt="" />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>{name}</p>
        <div className={styles.row}>
          {price} тг
          <button onClick={handleBuy} className={styles.btn}>
            {t[lang].cards.buy}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
