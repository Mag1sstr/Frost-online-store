import type { IOrdersData } from "../../../../../types/interfaces";
import { formatPrice } from "../../../../../utils/formatPrice";
import styles from "./OrdersStage.module.scss";

interface IProps {
  ordersData: IOrdersData[] | undefined;
}

function OrdersStage({ ordersData }: IProps) {
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
        {ordersData?.map((item) => {
          const totalPrice = item.items.reduce(
            (acc, el) => acc + el.count * el.product.price,
            0
          );

          return (
            <div key={item.id} className={styles.order}>
              <div className={styles.container}>
                <div className={styles.order__row}>
                  <p className={styles.number}>
                    <span>Номер заказа</span> №{item.id}
                  </p>
                  <div className={styles.info}>
                    {item.items.map(({ product, count }) => (
                      <div key={product.id} className={styles.info__item}>
                        <p className={styles.name}>
                          <span>Наименование товара</span>
                          {product.name}
                        </p>
                        <p className={styles.count}>
                          {count} X {formatPrice(product.price)} тг
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className={styles.date}>
                    <span>Дата заказа</span>
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <p className={styles.price}>
                    <span>Стоимость</span>
                    {formatPrice(totalPrice)} тг
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrdersStage;
