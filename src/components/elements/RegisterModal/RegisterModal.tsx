import { useModals } from "../../../contexts/ModalsContext";
import styles from "./RegisterModal.module.scss";

function RegisterModal() {
  const { openRegisterModal, setOpenRegisterModal } = useModals();
  return (
    <div
      onClick={() => setOpenRegisterModal(false)}
      className={`${styles.wrapper} ${openRegisterModal && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div
          onClick={() => setOpenRegisterModal(false)}
          className={styles.close}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16L8.5 8.5M16 1L8.5 8.5M8.5 8.5L16 16M8.5 8.5L1 1"
              stroke="#C9C9C9"
              strokeWidth="2"
            />
          </svg>
        </div>

        <p className={styles.title}>Создание учётной записи</p>
        <div className={styles.col}>
          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="Имя" />
            <input className={styles.input} type="text" placeholder="Фамилия" />
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Адрес электронной почты"
          />
          <input className={styles.input} type="text" placeholder="Пароль" />
          <input
            className={styles.input}
            type="text"
            placeholder="Повторите пароль"
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn}>Зарегистрироваться</button>
          <button className={styles.second}>
            Войти в существующую учётную запись
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
