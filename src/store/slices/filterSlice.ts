import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "../store";
import axios from "axios";

const initialState = {
  brandsData: [],
  modelsData: [],
  genData: [],
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setBrandsData(state, action) {
      state.brandsData = action.payload;
    },
    setModelsData(state, action) {
      state.modelsData = action.payload;
    },
    setGenData(state, action) {
      state.genData = action.payload;
    },
  },
});

export function getBrands() {
  return function (dispatch: AppDispatch) {
    axios.get("https://frost.runtime.kz/api/brands").then((resp) => {
      dispatch(setBrandsData(resp.data));
    });
  };
}

export const { setBrandsData, setModelsData, setGenData } = filterSlice.actions;

export default filterSlice.reducer;
