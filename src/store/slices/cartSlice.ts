import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  count: number;
}

const initialState: CartState = {
  count: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setCartCount } = cartSlice.actions;

export default cartSlice.reducer;
