import { useState } from "react";
import styles from "./Checkbox.module.scss";
function Checkbox() {
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive((prev) => !prev)} className={styles.wrapper}>
      <div className={`${styles.check} ${active && styles.active}`}>
        {active && (
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.85714L7.08696 10L15 2"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        )}
      </div>
      в наличии
    </div>
  );
}

export default Checkbox;
