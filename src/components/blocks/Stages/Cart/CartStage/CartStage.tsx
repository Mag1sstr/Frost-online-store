import type { ICart } from "../../../../../types/interfaces";
import Button from "../../../../elements/Button/Button";
import Select from "../../../../elements/Select/Select";
import StageWrapper from "../../../../elements/StageWrapper/StageWrapper";
import styles from "./CartStage.module.scss";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
  data: ICart[] | undefined;
}

function CartStage({ setMainStage, setCurrentStage, data }: IProps) {
  const totalPrice = data?.reduce(
    (acc, el) => acc + el.count * el.product.price,
    0
  );

  const handleNextStage = () => {
    setMainStage(1);
    setCurrentStage((prev) => prev + 1);
  };
  return (
    <>
      <StageWrapper>
        <h3 className={styles.title}>Корзина</h3>
        <div className={styles.inner}>
          <div className={styles.details}>
            <p>Наименование товара</p>
            <p>Количество</p>
            <p>Цена</p>
          </div>
          <div className={styles.col}>
            {data?.map(({ count, product: { id, code, name, price } }) => (
              <div key={id} className={styles.item}>
                <div className={styles.info}>
                  <p className={styles.name}>{name}</p>
                  <div className={styles.info__row}>
                    Артикул: {code} <span>Удалить из корзины</span>
                  </div>
                </div>
                <div className={styles.counter}>
                  <div className={styles.counter__row}>
                    <button>-</button>
                    <div className={styles.count}>{count}</div>
                    <button>+</button>
                  </div>
                </div>
                <div className={styles.price}>{price * count} тг</div>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.payment}>
              <p>Способ оплаты</p>
              <Select title="Оплата при получении" />
            </div>
            {totalPrice && (
              <div className={styles.total}>
                <p>Итого к оплате:</p> <span>{totalPrice} тг</span>
              </div>
            )}
          </div>
        </div>
      </StageWrapper>
      <Button onClick={handleNextStage} width={350} height={50} end>
        Оформить заказ
      </Button>
    </>
  );
}

export default CartStage;
