import styles from "./SingleProductPage.module.scss";
import img1 from "../../images/singleProduct/01.png";
import img2 from "../../images/singleProduct/02.jpg";
import img3 from "../../images/singleProduct/03.jpg";
import img4 from "../../images/singleProduct/04.jpg";
import check from "../../images/singleProduct/check.svg";
import not from "../../images/singleProduct/not.svg";

import { useState } from "react";
import { useLang } from "../../hooks/useLang";

const images = [img1, img2, img3, img4];

function SingleProductPage() {
  const { t, lang } = useLang();
  const [mainImage, setMainImage] = useState(0);

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.block__img}>
            <div className={styles.main__img}>
              <img src={images[mainImage]} alt="" />
            </div>
            <div className={styles.images}>
              {images.map((img, i) => (
                <div
                  onClick={() => setMainImage(i)}
                  key={i}
                  className={styles.images__item}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.info}>
            <h2>
              Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300
            </h2>
            <div className={styles.info__col}>
              <p>
                <span>Артикул:</span>AC0053
              </p>
              <p>
                <span>Производитель:</span> DOWOON
              </p>
              <p>
                <span>Описание:</span> Оригинальный компрессор 7H15 MG, муфта
                под 8-ми ручейковый ремень, управляется напряжением 24 Вольта.
                Подлинность изделия можно проверить на сайте компании
                производителя.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.price}>110 999 тг</p>
            <div className={styles.card__col}>
              <p className={styles.available}>
                <img src={check} alt="" /> в наличии
              </p>
              <p className={styles.city}>г. Астана</p>
              <p className={styles.city}>г. Алматы</p>
            </div>
            <button className={styles.buy}>{t[lang].cards.buy}</button>
          </div>
          <div className={styles.help}>
            <p className={styles.help__title}>Применим к автомобилям: </p>
            <div className={styles.help__block}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
