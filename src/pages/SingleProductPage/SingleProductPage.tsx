import styles from "./SingleProductPage.module.scss";
import img1 from "../../images/singleProduct/01.png";
import img2 from "../../images/singleProduct/02.jpg";
import img3 from "../../images/singleProduct/03.jpg";
import img4 from "../../images/singleProduct/04.jpg";
import check from "../../images/singleProduct/check.svg";
import not from "../../images/singleProduct/not.svg";

import { useEffect, useState } from "react";
import { useLang } from "../../hooks/useLang";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../api/api";

const images = [img1, img2, img3, img4];

function SingleProductPage() {
  const [mainImage, setMainImage] = useState(0);
  const { id } = useParams();

  const { data } = useGetSingleProductQuery(id!);

  const { t, lang } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
          <div className={styles.help}>
            <p className={styles.help__title}>Применим к автомобилям: </p>
            <div className={styles.help__block}></div>
          </div>

          <div className={styles.description}>
            <div className={styles.info}>
              <h2>{data?.name}</h2>
              <div className={styles.info__col}>
                <p>
                  <span>Артикул: </span>
                  {data?.code}
                </p>
                <p>
                  <span>Производитель: </span>
                  {data?.manufacturer}
                </p>
                <p>
                  <span>Описание: </span>
                  {data?.description}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <p className={styles.price}>{data?.price} тг</p>
              <div className={styles.card__col}>
                <p className={styles.available}>
                  {data?.available === 1 ? (
                    <>
                      <img src={check} alt="" /> в наличии
                    </>
                  ) : (
                    <>
                      <img src={not} alt="" /> нет в наличии
                    </>
                  )}
                </p>
                <p className={styles.city}>г. Астана</p>
                <p className={styles.city}>г. Алматы</p>
              </div>
              <button className={styles.buy}>{t[lang].cards.buy}</button>
            </div>
          </div>
          <div className={styles.reviews}>
            <p className={styles.reviews__title}>Отзывы</p>
            <p className={styles.reviews__text}>
              Чтобы оставить отзыв <span>войдите на сайт</span>
            </p>
            <div className={styles.reviews__col}>
              <div className={styles.reviews__item}>
                <p className={styles.item__name}>
                  Константин Константинович Константинопольский
                </p>
                <p className={styles.item__text}>
                  Несколько лет покупаю запчасти в этом магазине, ребята очень
                  быстро подбирают, что нужно и по адекватным ценам. Спасибо,
                  что выручаете! Смело рекомендую своим знакомым.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
