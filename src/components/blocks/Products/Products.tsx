import { useState } from "react";
import type { IProductData } from "../../../types/interfaces";
import BuyModal from "../../elements/BuyModal/BuyModal";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

interface IProps {
  data: IProductData[] | undefined;
}

function Products({ data }: IProps) {
  const [selectProduct, setSelectProduct] = useState<IProductData | null>(null);

  return (
    <section className={styles.products}>
      <BuyModal product={selectProduct} />
      <div className="container">
        <div className={styles.row}>
          {data?.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onSelect={(item) => setSelectProduct(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
