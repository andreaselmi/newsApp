import {createSlice} from '@reduxjs/toolkit';
import {darkMode, lightMode} from '../config/colors';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    isDarkMode: true,
    colors: {...darkMode},
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.colors = state.isDarkMode ? {...darkMode} : {...lightMode};
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      state.colors = state.isDarkMode ? {...darkMode} : {...lightMode};
    },
  },
});

export const {toggleDarkMode, setDarkMode} = configSlice.actions;
export default configSlice.reducer;
