import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './combineReducers';

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}
