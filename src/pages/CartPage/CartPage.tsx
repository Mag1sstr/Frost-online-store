import { useState } from "react";
import styles from "./CartPage.module.scss";
import CartStage from "../../components/blocks/Stages/CartStage";

const stages = [
  { name: "Корзина", component: <CartStage /> },
  { name: "Контактные данные" },
  { name: "Доставка" },
  { name: "Завершение" },
];

function CartPage() {
  const [currentStage, setCurrentStage] = useState(0);
  return (
    <section className={styles.cart}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2>Оформление заказа</h2>
            <div className={styles.stages}>
              {stages.map(({ name }, i) => (
                <button
                  key={name}
                  className={`${styles.stage} ${
                    currentStage === i && styles.active
                  }`}
                  onClick={() => {
                    setCurrentStage(i);
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.stage__container}>
          {stages[currentStage].component}
        </div>
      </div>
    </section>
  );
}

export default CartPage;
