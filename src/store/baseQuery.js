import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a function that returns a configured fetchBaseQuery with token implementation
export const createCustomFetchBaseQuery = () => fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    let token=getState()?.user?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
});