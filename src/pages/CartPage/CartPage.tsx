import { useState } from "react";
import styles from "./CartPage.module.scss";
import CartStage from "../../components/blocks/Stages/Cart/CartStage/CartStage";
import type { IStages } from "../../types/interfaces";
import ContactsStage from "../../components/blocks/Stages/Cart/ContactsStage/ContactsStage";
import DeliveryStage from "../../components/blocks/Stages/Cart/DeliveryStage/DeliveryStage";
import FinalStage from "../../components/blocks/Stages/Cart/FinalStage/FinalStage";
import { useGetCartQuery } from "../../api/api";

function CartPage() {
  const [currentStage, setCurrentStage] = useState(0);
  const [mainStage, setMainStage] = useState(0);

  const { data } = useGetCartQuery(null);
  console.log(data);

  const stages: IStages[] = [
    {
      name: "Корзина",
      component: (
        <CartStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
        />
      ),
    },
    {
      name: "Контактные данные",
      component: (
        <ContactsStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
        />
      ),
    },
    {
      name: "Доставка",
      component: (
        <DeliveryStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
        />
      ),
    },
    { name: "Завершение", component: <FinalStage /> },
  ];

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
                    if (i <= mainStage) {
                      setCurrentStage(i);
                    }
                  }}
                  disabled={i > mainStage}
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
