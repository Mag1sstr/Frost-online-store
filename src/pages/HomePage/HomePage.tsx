import { useState } from "react";
import { useGetProductsQuery } from "../../api/api";
import Products from "../../components/blocks/Products/Products";
import Slider from "../../components/blocks/Slider/Slider";
import Filters from "../../components/blocks/Filters/Filters";
import Pagination from "../../components/blocks/Pagination/Pagination";
import { useAppSelector } from "../../store/store";

function HomePage() {
  const { brandId, modelId, generationId } = useAppSelector(
    (state) => state.filter
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [available, setAvailable] = useState(0);

  const PAGE_SIZE = 6;
  const { data: products } = useGetProductsQuery({
    page: currentPage,
    size: PAGE_SIZE,
    brandId,
    modelId,
    generationId,
    available,
  });

  return (
    <section>
      <Slider />
      <Filters setAvailable={setAvailable} setCurrentPage={setCurrentPage} />
      <Products data={products?.items} />
      <div className="container">
        <Pagination
          totalPages={products?.totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}

export default HomePage;
