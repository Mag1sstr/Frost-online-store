import { useEffect } from "react";
import { useLang } from "../../../hooks/useLang";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Checkbox from "../../elements/Checkbox/Checkbox";
import Select from "../../elements/Select/Select";
import styles from "./Filters.module.scss";
import {
  brandChange,
  generationChange,
  getBrands,
  modelChange,
} from "../../../store/slices/filterSlice";

interface IProps {
  setAvailable: (fn: (prev: number) => number) => void;
  setCurrentPage: (page: number) => void;
}

function Filters({ setAvailable, setCurrentPage }: IProps) {
  const { brandsData, modelsData, genData } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const { t, lang } = useLang();
  return (
    <section className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.selects}>
            <Select
              name={t[lang].filters.category}
              title={t[lang].filters.all_categories}
              data={[]}
            />
            <Select
              name={t[lang].filters.brand}
              title={t[lang].filters.all_brands}
              data={brandsData}
              onChange={(id) => {
                dispatch(brandChange(id));
                setCurrentPage(1);
              }}
            />
            <Select
              name={t[lang].filters.model}
              title={t[lang].filters.all_models}
              data={modelsData}
              onChange={(id) => {
                dispatch(modelChange(id));
                setCurrentPage(1);
              }}
            />
            <Select
              name={t[lang].filters.gen}
              title={t[lang].filters.all_gen}
              data={genData}
              onChange={(id) => {
                dispatch(generationChange(id));
                setCurrentPage(1);
              }}
            />
          </div>
          <Checkbox setAvailable={setAvailable} />
        </div>
      </div>
    </section>
  );
}

export default Filters;
