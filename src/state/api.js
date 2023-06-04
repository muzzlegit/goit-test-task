import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://6478e9d9362560649a2ea369.mockapi.io/tweets/api/';

export const api = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['tweets'],
  endpoints: builder => ({
    getTweetsAmout: builder.query({
      query: () => `/tweets`,
      transformResponse: response => response.length,
      providesTags: ['tweets'],
    }),
    getTweets: builder.query({
      query: page => `/tweets/?&limit=3&page=${page}`,
      providesTags: ['tweets'],
    }),
    addFollow: builder.mutation({
      query: ({ id, followers }) => ({
        url: `/tweets/${id}`,
        method: 'PUT',
        body: followers,
      }),
      invalidatesTags: ['tweets'],
    }),
    // deleteContact: builder.mutation({
    //   query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});

export const {
  useGetTweetsQuery,
  useGetTweetsAmoutQuery,
  useAddFollowMutation,
} = api;
