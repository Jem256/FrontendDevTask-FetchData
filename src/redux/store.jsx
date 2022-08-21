import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './features/dataSlice';

export default configureStore({
    reducer: {
      info: covidReducer,
    },
});
