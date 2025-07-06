import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.scss";
import emptyImg from "../../../images/emptyCart/no-order.png";
function EmptyCart() {
  return (
    <section className={styles.empty}>
      <img src={emptyImg} alt="no orders" />
      <p>Нет товара в корзине</p>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </section>
  );
}

export default EmptyCart;
