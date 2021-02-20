import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    darkMode: false,
  },
  reducers: {
    activeDarkMode: (state, action) => {
      state.darkMode = true;
    },
    activeLightMode: (state, action) => {
      state.darkMode = false;
    },
  },
});

export const {activeDarkMode, activeLightMode} = configSlice.actions;
export default configSlice.reducer;
