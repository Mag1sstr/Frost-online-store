import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/api";
import filterSlice from "./slices/filterSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    auth: authSlice,

    [api.reducerPath]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
