import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './combineReducers';
import {apiMiddleware} from './news';

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiMiddleware),
  });
}
