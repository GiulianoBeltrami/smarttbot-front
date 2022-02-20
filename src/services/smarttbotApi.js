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
        getStrategies: builder.query({
            query: () => createRequest(`/api/v1/strategy`),
        }),
        getAllRobots: builder.query({
            query: () => createRequest(`/api/v1/robot`),
        }),
    })
});

export const {
    useGetOverviewQuery,
    useGetStrategiesQuery,
    useGetAllRobotsQuery
} = smarttbotApi;