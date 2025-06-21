import styles from "./FinalStage.module.scss";
import StageWrapper from "../../../../elements/StageWrapper/StageWrapper";
import { Link } from "react-router-dom";

import checkImg from "../../../../../images/cart/check.svg";

function FinalStage() {
  return (
    <StageWrapper>
      <h3 className={styles.title}>Заказ успешно создан</h3>
      <div className={styles.row}>
        <div className={styles.block}>
          <img src={checkImg} alt="" />
          <p className={styles.text}>
            Заказ №100001 был создан. Вы можете просмотреть список всех ваших
            заказов в личном кабинете.
          </p>
        </div>
        <Link to="/profile">
          <span className={styles.link}>Перейти в личный кабинет</span>
        </Link>
      </div>
    </StageWrapper>
  );
}

export default FinalStage;
