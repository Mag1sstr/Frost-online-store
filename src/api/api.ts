import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { ICommets, IProduct, IProductData } from "../types/interfaces";

interface IProductsResponse {
  items: IProductData[];
  totalPages: number;
}
interface IProductsParams {
  page: number;
  size: number;
  available?: number;
  brandId?: number;
  modelId?: number;
  generationId?: number;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://frost.runtime.kz/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, IProductsParams>({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getReviews: builder.query<ICommets[], string>({
      query: (id) => ({
        url: `/reviews?productId=${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetReviewsQuery,
} = api;
