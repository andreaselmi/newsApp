import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth';

export default function () {
  return configureStore({reducer: authSlice});
}
