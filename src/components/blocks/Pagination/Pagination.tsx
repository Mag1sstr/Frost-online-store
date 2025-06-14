import styles from "./Pagination.module.scss";

interface IProps {
  totalPages: number | undefined | null;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  return (
    totalPages && (
      <section className={styles.pagination}>
        <div className={styles.row}>
          {[...Array(totalPages)].map((_, i) => (
            <div
              key={i}
              className={`${styles.page} ${
                currentPage === i + 1 && styles.active
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </section>
    )
  );
}

export default Pagination;
