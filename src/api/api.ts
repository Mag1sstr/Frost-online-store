import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { IProductData } from "../types/interfaces";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://frost.runtime.kz/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ items: IProductData[] }, {}>({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = api;
