import { Link } from "react-router-dom";
import styles from "./NotAuthorized.module.scss";

function NotAuthorized() {
  return (
    <section className={styles.wrapper}>
      <p>Вы не зашли в аккаунт</p>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </section>
  );
}

export default NotAuthorized;
