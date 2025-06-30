import { useState } from "react";
import { useModals } from "../../../contexts/ModalsContext";
import type { ICommets } from "../../../types/interfaces";
import Pagination from "../Pagination/Pagination";
import styles from "./Reviews.module.scss";
import { useAuth } from "../../../store/slices/authSlice";
import Button from "../../elements/Button/Button";

interface IProps {
  data: ICommets[] | undefined;
  reviewCheck: boolean | undefined;
}

function Reviews({ data, reviewCheck }: IProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { setOpenRegisterModal } = useModals();
  const { user } = useAuth();

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
              <textarea placeholder="Напишите впечатления о товаре"></textarea>
              <Button end width={190} height={40}>
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
