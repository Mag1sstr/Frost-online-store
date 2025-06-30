import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  ICartResponse,
  ICommets,
  ILoginBody,
  ILoginResponse,
  IOrderBody,
  IOrdersData,
  IProduct,
  IProductData,
  IRegisterBody,
} from "../types/interfaces";
import type { RootState } from "../store/store";

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
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frost.runtime.kz/api",
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
    getCart: builder.query<ICartResponse, null>({
      query: () => ({
        url: "/cart",
      }),
      providesTags: () => [
        {
          type: "Cart",
        },
      ],
    }),
    getOrders: builder.query<IOrdersData[], null>({
      query: () => ({
        url: "/orders",
      }),
    }),

    addToCart: builder.mutation<null, { productId: number; count: number }>({
      query: ({ productId, count }) => ({
        method: "GET",
        url: "/cart/add",
        params: {
          productId,
          count,
        },
      }),
      invalidatesTags: () => [
        {
          type: "Cart",
        },
      ],
    }),
    increaseCartItem: builder.mutation<null, number>({
      query: (id) => ({
        method: "GET",
        url: `/cart/increase?productId=${id}`,
      }),
      invalidatesTags: () => [{ type: "Cart" }],
    }),
    decreaseCartItem: builder.mutation<null, number>({
      query: (id) => ({
        method: "GET",
        url: `/cart/decrease?productId=${id}`,
      }),
      invalidatesTags: () => [{ type: "Cart" }],
    }),
    deleteCartItem: builder.mutation<null, number>({
      query: (id) => ({
        method: "GET",
        url: `/cart/delete?productId=${id}`,
      }),
      invalidatesTags: () => [{ type: "Cart" }],
    }),

    registerUser: builder.mutation<null, IRegisterBody>({
      query: ({ first_name, last_name, email, password }) => ({
        method: "POST",
        url: "/registration",
        body: {
          first_name,
          last_name,
          email,
          password,
        },
      }),
    }),
    loginUser: builder.mutation<ILoginResponse, ILoginBody>({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/auth/token",
        body: {
          username: email,
          password,
        },
      }),
    }),
    getUser: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/auth/user",
      }),
    }),

    createOrder: builder.mutation<number, IOrderBody>({
      query: (body) => ({
        method: "POST",
        url: "/orders",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetReviewsQuery,
  useGetCartQuery,
  useGetOrdersQuery,
  useAddToCartMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserMutation,
  useIncreaseCartItemMutation,
  useDecreaseCartItemMutation,
  useDeleteCartItemMutation,
  useCreateOrderMutation,
} = api;
