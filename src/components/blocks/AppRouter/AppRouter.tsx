import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
