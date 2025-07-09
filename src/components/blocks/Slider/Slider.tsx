import styles from "./Slider.module.scss";
import banner1 from "../../../images/banners/01.jpg";
import banner2 from "../../../images/banners/02.jpg";
import banner3 from "../../../images/banners/03.jpg";
import { useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const banners = [banner1, banner2, banner3];

function Slider() {
  const [step, setStep] = useState(0);

  const windowWidth = useWindowWidth();

  const handleNext = () => {
    setStep((prev) =>
      prev < banners.length - 1 ? prev + 1 : prev === banners.length - 1 ? 0 : 0
    );
  };
  const handlePrevios = () => {
    setStep((prev) =>
      prev > 0 ? prev - 1 : prev === 0 ? banners.length - 1 : 0
    );
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrevios} className={styles.left}>
        <svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9999 61.074L3 32.074L33.074 2"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="3"
          />
        </svg>
      </button>
      <div
        className={styles.row}
        style={{ transform: `translateX(-${step * windowWidth}px)` }}
      >
        {banners.map((banner, i) => (
          <img
            key={i}
            draggable={false}
            className={styles.banner}
            style={{ width: windowWidth }}
            src={banner}
            alt=""
            height={500}
          />
        ))}
      </div>
      <button onClick={handleNext} className={styles.right}>
        <svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9999 61.074L3 32.074L33.074 2"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="3"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
