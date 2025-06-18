import Button from "../../../elements/Button/Button";
import Select from "../../../elements/Select/Select";
import StageWrapper from "../../../elements/StageWrapper/StageWrapper";
import styles from "./CartStage.module.scss";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
}

function CartStage({ setMainStage, setCurrentStage }: IProps) {
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
            <div className={styles.item}>
              <div className={styles.info}>
                <p className={styles.name}>
                  Компрессор кондиционера Hyundai Tucson, Kia Sportage
                  97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD; 0935-02
                </p>
                <div className={styles.info__row}>
                  Артикул: AC97701 <span>Удалить из корзины</span>
                </div>
              </div>
              <div className={styles.counter}>
                <div className={styles.counter__row}>
                  <button>-</button>
                  <div className={styles.count}>1</div>
                  <button>+</button>
                </div>
              </div>
              <div className={styles.price}>110 999 тг</div>
            </div>
            <div className={styles.item}>
              <div className={styles.info}>
                <p className={styles.name}>
                  Компрессор кондиционера Hyundai Tucson, Kia Sportage
                  97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD; 0935-02
                </p>
                <div className={styles.info__row}>
                  Артикул: AC97701 <span>Удалить из корзины</span>
                </div>
              </div>
              <div className={styles.counter}>
                <div className={styles.counter__row}>
                  <button>-</button>1<button>+</button>
                </div>
              </div>
              <div className={styles.price}>110 999 тг</div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.payment}>
              <p>Способ оплаты</p>
              <Select title="Оплата при получении" />
            </div>
            <div className={styles.total}>
              <p>Итого к оплате:</p> <span>206 998 тг</span>
            </div>
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
