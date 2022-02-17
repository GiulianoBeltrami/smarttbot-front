import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'https://api-front-test.k8s.smarttbot.com';

const createRequest = (url) => ({ url: url})

export const smarttbotApi = createApi({
    reducerPath: 'smarttbotApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getOverview: builder.query({
            query: () => createRequest(`/api/v1/robot/overview`),
        }),
        // getCryptoDetails: builder.query({
        //     query: (coinId) => createRequest(`/api/v1/`),
        // }),
        // getCryptoHistory: builder.query({
        //     query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        // }),
        // getCryptoExchanges: builder.query({
        //     query: () => createRequest(`/exchanges`),
        // }),
    })
});

export const {
    useGetOverviewQuery,
} = smarttbotApi;