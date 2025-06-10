import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "../store";
import axios from "axios";

const initialState = {
  brandsData: [],
  modelsData: [],
  genData: [],
  brandId: 0,
  modelId: 0,
  generationId: 0,
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

    setBrandId(state, action) {
      state.brandId = action.payload;
    },
    setModelId(state, action) {
      state.modelId = action.payload;
    },
    setGenerationId(state, action) {
      state.generationId = action.payload;
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

export function brandChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setBrandId(0));
      dispatch(setModelId(0));
      dispatch(setGenerationId(0));

      dispatch(setModelsData([]));
      dispatch(setGenData([]));
    } else {
      dispatch(setBrandId(id));
      axios
        .get(`https://frost.runtime.kz/api/models?brandId=${id}`)
        .then((resp) => {
          dispatch(setModelsData(resp.data));
        });
    }
  };
}
export function modelChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setGenerationId(0));
      dispatch(setModelId(0));

      dispatch(setGenData([]));
    } else {
      dispatch(setModelId(id));
      axios
        .get(`https://frost.runtime.kz/api/generations?modelId=${id}`)
        .then((resp) => {
          dispatch(setGenData(resp.data));
        });
    }
  };
}

export function generationChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setGenerationId(0));
    } else {
      dispatch(setGenerationId(id));
    }
  };
}

export const {
  setBrandsData,
  setModelsData,
  setGenData,
  setBrandId,
  setModelId,
  setGenerationId,
} = filterSlice.actions;

export default filterSlice.reducer;
