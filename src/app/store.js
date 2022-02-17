import { configureStore } from "@reduxjs/toolkit";
import { smarttbotApi } from '../services/smarttbotApi';

export default configureStore({
    reducer:{
        [smarttbotApi.reducerPath]: smarttbotApi.reducer
    },
});