import { useEffect } from "react";
import { useGetUserMutation } from "../api/api";
import AppRouter from "../components/blocks/AppRouter/AppRouter";
import Footer from "../components/blocks/Footer/Footer";
import Header from "../components/blocks/Header/Header";
import { useAppDispatch } from "../store/store";
import { setUser, useAuth } from "../store/slices/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const [getUser, { data, isSuccess }] = useGetUserMutation();

  useEffect(() => {
    getUser(null);
  }, []);
  if (isSuccess) {
    dispatch(setUser(data));
  }
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="app">
      <div>
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
