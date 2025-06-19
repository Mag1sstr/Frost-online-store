import Button from "../../../elements/Button/Button";
import StageWrapper from "../../../elements/StageWrapper/StageWrapper";
import styles from "./ContactsStage.module.scss";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
}

function ContactsStage({ setMainStage, setCurrentStage }: IProps) {
  const handleNextStage = () => {
    setMainStage(2);
    setCurrentStage((prev) => prev + 1);
  };

  return (
    <>
      <StageWrapper>
        <h3 className={styles.title}>Контактные данные</h3>
        <div className={styles.row}>
          <div className={styles.block}>
            <div className={styles.col}>
              <div className={styles.wrapper}>
                <p>Фамилия</p>
                <input type="text" />
              </div>
              <div className={styles.wrapper}>
                <p>Имя</p>
                <input type="text" />
              </div>
              <div className={styles.wrapper}>
                <p>Отчество</p>
                <input type="text" />
              </div>
              <div className={styles.wrapper}>
                <p>Телефон</p>
                <input type="number" placeholder="+7 (___) ___ __ __" />
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div className={styles.wrapper}>
              <p>E-mail</p>
              <input type="email" />
            </div>
          </div>
        </div>
      </StageWrapper>
      <Button onClick={handleNextStage} width={350} height={50} end>
        Подтвердить
      </Button>
    </>
  );
}

export default ContactsStage;
