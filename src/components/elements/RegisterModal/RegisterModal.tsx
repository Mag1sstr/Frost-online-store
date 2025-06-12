import { useState } from "react";
import { useModals } from "../../../contexts/ModalsContext";
import styles from "./RegisterModal.module.scss";
import { useLang } from "../../../hooks/useLang";

function RegisterModal() {
  const [tab, setTab] = useState("register");

  const { openRegisterModal, setOpenRegisterModal } = useModals();
  const { t, lang } = useLang();
  return (
    <div
      onMouseDown={() => setOpenRegisterModal(false)}
      className={`${styles.wrapper} ${openRegisterModal && styles.open}`}
    >
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
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

        {tab === "register" && (
          <p className={styles.title}>{t[lang].register_modal.title}</p>
        )}
        {tab === "login" && (
          <p className={styles.title}>Вход в учётную запись</p>
        )}
        <div className={styles.col}>
          {tab === "register" && (
            <div className={styles.row}>
              <input
                className={styles.input}
                type="text"
                placeholder={t[lang].register_modal.name}
              />
              <input
                className={styles.input}
                type="text"
                placeholder={t[lang].register_modal.surname}
              />
            </div>
          )}
          <input
            className={styles.input}
            type="text"
            placeholder={t[lang].register_modal.email}
          />
          <input
            className={styles.input}
            type="text"
            placeholder={t[lang].register_modal.password}
          />
          {tab === "register" && (
            <input
              className={styles.input}
              type="text"
              placeholder={t[lang].register_modal.rep_password}
            />
          )}
        </div>
        <div className={styles.buttons}>
          {tab === "register" && (
            <>
              <button className={styles.btn}>
                {t[lang].register_modal.btn}
              </button>
              <button onClick={() => setTab("login")} className={styles.second}>
                {t[lang].register_modal.second}
              </button>
            </>
          )}
          {tab === "login" && (
            <>
              <button className={styles.btn}>Войти</button>
              <button
                onClick={() => setTab("register")}
                className={styles.second}
              >
                Создать новую учётную запись
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
