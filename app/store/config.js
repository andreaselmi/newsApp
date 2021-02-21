import {createSlice} from '@reduxjs/toolkit';
import {darkMode, lightMode} from '../config/colors';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    isDarkMode: true,
    colors: {...darkMode},
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
      state.colors = state.isDarkMode ? {...darkMode} : {...lightMode};
    },
  },
});

export const {toggleDarkMode} = configSlice.actions;
export default configSlice.reducer;
