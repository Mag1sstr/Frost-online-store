import styles from "./CartPage.module.scss";

const stages = [
  { name: "Корзина" },
  { name: "Контактные данные" },
  { name: "Доставка" },
  { name: "Завершение" },
];

function CartPage() {
  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <h2>Оформление заказа</h2>
            <div className={styles.stages}>
              {stages.map(({ name }) => (
                <button key={name} className={styles.stage}>
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
