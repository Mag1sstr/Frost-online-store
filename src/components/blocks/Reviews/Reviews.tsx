import { useState } from "react";
import { useModals } from "../../../contexts/ModalsContext";
import type { ICommets } from "../../../types/interfaces";
import Pagination from "../Pagination/Pagination";
import styles from "./Reviews.module.scss";
import { useAuth } from "../../../store/slices/authSlice";
import Button from "../../elements/Button/Button";
import { useLang } from "../../../hooks/useLang";

interface IProps {
  data: ICommets[] | undefined;
  reviewCheck: boolean | undefined;
  handleCreateOrder: (review: string) => void;
}

function Reviews({ data, reviewCheck, handleCreateOrder }: IProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewValue, setReviewValue] = useState("");
  const [reviewError, setReviewError] = useState(false);

  const { setOpenRegisterModal } = useModals();
  const { user } = useAuth();
  const { t, lang } = useLang();

  const pageSize = 5;
  const totalPages = data ? Math.ceil(data.length / pageSize) : null;
  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className={styles.reviews}>
      <p className={styles.reviews__title}>Отзывы</p>
      {user ? (
        <>
          {reviewCheck ? (
            <div className={styles.create}>
              <div>Вы уже оставили отзыв!</div>
            </div>
          ) : (
            <div className={styles.create}>
              {reviewError && (
                <div className={styles.err}>{t[lang].errors.required}</div>
              )}
              <textarea
                placeholder="Напишите впечатления о товаре"
                value={reviewValue}
                onChange={(e) => setReviewValue(e.target.value)}
              ></textarea>
              <Button
                onClick={() => {
                  if (!!reviewValue.length) {
                    setReviewError(false);
                    handleCreateOrder(reviewValue);
                  } else {
                    setReviewError(true);
                  }
                }}
                end
                width={190}
                height={40}
              >
                Оставить отзыв
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className={styles.reviews__text}>
          Чтобы оставить отзыв{" "}
          <span onClick={() => setOpenRegisterModal(true)}>
            войдите на сайт
          </span>
        </p>
      )}

      <div className={styles.reviews__col}>
        {data
          ?.slice(startIndex, endIndex)
          .map(({ review, user: { firstName, lastName }, id }) => (
            <div key={id} className={styles.reviews__item}>
              <p className={styles.item__name}>
                {firstName} {lastName}
              </p>
              <p className={styles.item__text}>{review}</p>
            </div>
          ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Reviews;
