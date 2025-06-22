import styles from "./OrdersStage.module.scss";

function OrdersStage() {
  return (
    <div className={styles.orders}>
      <div className={styles.container}>
        <h3 className={styles.title}>История заказов</h3>
        <div className={styles.details}>
          <p>Номер заказа</p>
          <p>Наименование товара</p>
          <p>Дата заказа</p>
          <p>Стоимость</p>
        </div>
      </div>

      <div className={styles.col}>
        <div className={styles.order}>
          <div className={styles.container}>
            <div className={styles.order__row}>
              <p className={styles.number}>
                <span>Номер заказа</span> №100001
              </p>
              <div className={styles.info}>
                <p className={styles.name}>
                  <span>Наименование товара</span>
                  Компрессор кондиционера Hyundai Tucson, Kia Sportage
                  97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD; 0935-02
                </p>
                <p className={styles.count}>1 X 110 999 тг</p>
              </div>
              <p className={styles.date}>
                <span>Дата заказа</span>06.07.2019
              </p>
              <p className={styles.price}>
                <span>Стоимость</span>206 998 тг
              </p>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.container}>
            <div className={styles.order__row}>
              <p className={styles.number}>
                <span>Номер заказа</span> №100001
              </p>
              <div className={styles.info}>
                <p className={styles.name}>
                  <span>Наименование товара</span>
                  Компрессор кондиционера Hyundai Tucson, Kia Sportage
                  97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD; 0935-02
                </p>
                <p className={styles.count}>1 X 110 999 тг</p>
              </div>
              <p className={styles.date}>
                <span>Дата заказа</span>06.07.2019
              </p>
              <p className={styles.price}>
                <span>Стоимость</span>206 998 тг
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersStage;
