import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../types/interfaces";
import { useAppSelector } from "../store";

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

export function useAuth() {
  return useAppSelector((state) => state.auth);
}

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
