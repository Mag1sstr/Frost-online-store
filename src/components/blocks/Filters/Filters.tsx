import Select from "../../elements/Select/Select";
import styles from "./Filters.module.scss";
function Filters() {
  return (
    <section className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.selects}>
            <Select name="Категория" title="Все категории" />
            <Select name="Категория" title="Все категории" />
            <Select name="Категория" title="Все категории" />
            <Select name="Категория" title="Все категории" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filters;
