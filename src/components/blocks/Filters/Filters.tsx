import { useLang } from "../../../hooks/useLang";
import Checkbox from "../../elements/Checkbox/Checkbox";
import Select from "../../elements/Select/Select";
import styles from "./Filters.module.scss";

interface IProps {
  setAvailable: (fn: (prev: number) => number) => void;
}

function Filters({ setAvailable }: IProps) {
  const { t, lang } = useLang();
  return (
    <section className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.selects}>
            <Select name={t[lang].filters.category} title="Все категории" />
            <Select name={t[lang].filters.brand} title="Все категории" />
            <Select name={t[lang].filters.model} title="Все категории" />
            <Select name={t[lang].filters.gen} title="Все категории" />
          </div>
          <Checkbox setAvailable={setAvailable} />
        </div>
      </div>
    </section>
  );
}

export default Filters;
