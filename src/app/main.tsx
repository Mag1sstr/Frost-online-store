import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import LangContextProvider from "../contexts/LangContext";
import ModalsContextProvider from "../contexts/ModalsContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <LangContextProvider>
        <ModalsContextProvider>
          <App />
        </ModalsContextProvider>
      </LangContextProvider>
    </Provider>
  </BrowserRouter>
);
