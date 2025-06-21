import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import SingleProductPage from "../../../pages/SingleProductPage/SingleProductPage";
import CartPage from "../../../pages/CartPage/CartPage";
import ProfilePage from "../../../pages/ProfilePage/ProfilePage";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRouter;
