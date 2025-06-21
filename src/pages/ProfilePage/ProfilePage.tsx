import { useState } from "react";
import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    {
      name: "Мои заказы",
      img: (
        <svg
          className={styles.icon}
          width="26"
          height="31"
          viewBox="0 0 26 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 8.64286L13 2L1 8.64286M25 8.64286L13 15.2857M25 8.64286V22.5714L13 29M13 15.2857L1 8.64286M13 15.2857V29M1 8.64286V22.5714L13 29"
            stroke="#1a2749"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: "Контактные данные",
      img: (
        <svg
          className={styles.icon}
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.70215 22.1786C6.21176 18.6479 9.58311 16.1898 13.4999 16.1898C17.5109 16.1898 20.9499 18.7676 22.4033 22.4352"
            stroke="#1A2749"
            stroke-width="2"
          />
          <circle
            cx="13.5002"
            cy="10.8507"
            r="4.58271"
            stroke="#1A2749"
            stroke-width="2"
          />
          <circle
            cx="13.5"
            cy="13.5"
            r="12.5"
            stroke="#1A2749"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "Доставка",
      img: (
        <svg
          className={styles.icon}
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5488 22.7559L14.5488 19L0.999999 19L1 6L14.5488 6L14.5488 2.13086L26.4717 12.0303L14.5488 22.7559Z"
            stroke="#1a2749"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];
  return (
    <section className={styles.profile}>
      <div className="container">
        <h2 className={styles.title}>Личный кабинет</h2>
        <div className={styles.row}>
          <div className={styles.menu}>
            <div className={styles.menu__col}>
              {stages.map(({ name, img }, index) => (
                <div
                  key={name}
                  className={`${styles.menu__item} ${
                    index === currentStage && styles.active
                  }`}
                  onClick={() => setCurrentStage(index)}
                >
                  {img}
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
