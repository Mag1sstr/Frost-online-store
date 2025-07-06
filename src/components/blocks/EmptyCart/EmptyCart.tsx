import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.scss";
function EmptyCart() {
  return (
    <section className={styles.empty}>
      <p>Нет товара в корзине</p>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default EmptyCart;
