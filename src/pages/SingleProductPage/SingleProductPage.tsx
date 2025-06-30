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
import {
  useGetReviewCheckQuery,
  useGetReviewsQuery,
  useGetSingleProductQuery,
} from "../../api/api";
import BuyModal from "../../components/elements/BuyModal/BuyModal";
import { useModals } from "../../contexts/ModalsContext";
import Loader from "../../components/elements/Loader/Loader";
import Reviews from "../../components/blocks/Reviews/Reviews";

const images = [img1, img2, img3, img4];

function SingleProductPage() {
  const [mainImage, setMainImage] = useState(0);
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError } = useGetSingleProductQuery(id!);
  const { data: reviewCheck } = useGetReviewCheckQuery(id!);
  const { data: reviews } = useGetReviewsQuery(id!);

  const { t, lang } = useLang();
  const { setOpenBuyModal } = useModals();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <section className={styles.product}>
          <BuyModal product={data!} />

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
                  <button
                    onClick={() => setOpenBuyModal(true)}
                    className={styles.buy}
                  >
                    {t[lang].cards.buy}
                  </button>
                </div>
              </div>
              <Reviews data={reviews!} reviewCheck={reviewCheck} />
            </div>
          </div>
        </section>
      )}
      {isError && <div>Что то пошло не так</div>}
    </>
  );
}

export default SingleProductPage;
