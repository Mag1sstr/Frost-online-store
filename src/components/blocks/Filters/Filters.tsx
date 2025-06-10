import { useEffect } from "react";
import { useLang } from "../../../hooks/useLang";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Checkbox from "../../elements/Checkbox/Checkbox";
import Select from "../../elements/Select/Select";
import styles from "./Filters.module.scss";
import { getBrands } from "../../../store/slices/filterSlice";

interface IProps {
  setAvailable: (fn: (prev: number) => number) => void;
}

function Filters({ setAvailable }: IProps) {
  const { brandsData } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  console.log(brandsData);

  const { t, lang } = useLang();
  return (
    <section className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.selects}>
            <Select
              name={t[lang].filters.category}
              title={t[lang].filters.all_categories}
            />
            <Select
              name={t[lang].filters.brand}
              title={t[lang].filters.all_brands}
              data={brandsData}
            />
            <Select
              name={t[lang].filters.model}
              title={t[lang].filters.all_models}
            />
            <Select
              name={t[lang].filters.gen}
              title={t[lang].filters.all_gen}
            />
          </div>
          <Checkbox setAvailable={setAvailable} />
        </div>
      </div>
    </section>
  );
}

export default Filters;
