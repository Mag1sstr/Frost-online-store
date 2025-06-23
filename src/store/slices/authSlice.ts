import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../types/interfaces";
import { useAppSelector, type AppDispatch } from "../store";
import axios from "axios";

export interface AuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export function getUser() {
  return function (dispatch: AppDispatch) {
    const { token } = useAppSelector((state) => state.auth);
    if (token) {
      (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`),
        axios.post("https://frost.runtime.kz/api/auth/user").then((resp) => {
          dispatch(setUser(resp.data));
        });
    }
  };
}

export function useAuth() {
  return useAppSelector((state) => state.auth);
}

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
