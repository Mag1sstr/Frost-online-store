import styles from "./DeliveryStage.module.scss";
import StageWrapper from "../../../elements/StageWrapper/StageWrapper";
function DeliveryStage() {
  return (
    <StageWrapper>
      <h3 className={styles.title}>Доставка</h3>
      <div className={styles.row}>
        <div className={styles.block}>
          <div className={styles.col}>
            <div className={styles.wrapper}>
              <p>Область</p>
              <input type="text" />
            </div>
            <div className={styles.wrapper}>
              <p>Город или поселок</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.block}>
          <div className={styles.col}>
            <div className={styles.wrapper}>
              <p>Улица</p>
              <input type="text" />
            </div>
            <div className={styles.col__row}>
              <div className={styles.wrapper}>
                <p>Дом</p>
                <input type="text" />
              </div>
              <div className={styles.wrapper}>
                <p>Квартира</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StageWrapper>
  );
}

export default DeliveryStage;
