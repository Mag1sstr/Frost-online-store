import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import SingleProductPage from "../../../pages/SingleProductPage/SingleProductPage";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
    </Routes>
  );
}

export default AppRouter;
