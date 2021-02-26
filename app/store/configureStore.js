import {configureStore} from '@reduxjs/toolkit';
import reducer from './combineReducers';
import {apiMiddleware, firestoreMiddleware} from './news';

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(apiMiddleware)
        .concat(firestoreMiddleware),
  });
}
