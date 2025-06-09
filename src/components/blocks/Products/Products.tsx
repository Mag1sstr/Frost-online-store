import type { IProductData } from "../../../types/interfaces";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

interface IProps {
  data: IProductData[] | undefined;
}

function Products({ data }: IProps) {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.row}>
          {data?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
