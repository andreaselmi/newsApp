import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import newsSlice from './news';

export default function () {
  return configureStore({
    reducer: newsSlice,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}
