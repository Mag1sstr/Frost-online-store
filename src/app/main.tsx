import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import LangContextProvider from "../contexts/LangContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </Provider>
  </BrowserRouter>
);
