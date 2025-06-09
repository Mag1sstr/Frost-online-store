import { useState } from "react";
import { useGetProductsQuery } from "../../api/api";
import Products from "../../components/blocks/Products/Products";
import Slider from "../../components/blocks/Slider/Slider";
import Filters from "../../components/blocks/Filters/Filters";
import Pagination from "../../components/blocks/Pagination/Pagination";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 6;
  const { data: products } = useGetProductsQuery({
    page: currentPage,
    size: PAGE_SIZE,
  });

  console.log(products);

  return (
    <section>
      <Slider />
      <Filters />
      <Products data={products?.items} />
      <Pagination
        totalPages={products?.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default HomePage;
