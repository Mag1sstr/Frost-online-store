import { useState } from "react";
import { useGetProductsQuery } from "../../api/api";
import Products from "../../components/blocks/Products/Products";
import Slider from "../../components/blocks/Slider/Slider";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 6;
  const { data: products } = useGetProductsQuery({
    page: currentPage,
    size: PAGE_SIZE,
  });

  // console.log(products?.items);

  return (
    <section>
      <Slider />
      <Products data={products?.items} />
    </section>
  );
}

export default HomePage;
