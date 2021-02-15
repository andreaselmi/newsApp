import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {
    authStart: (auth, action) => {
      auth.isLoading = true;
    },
    authSuccess: (auth, action) => {
      auth.isLoading = false;
      auth.user = action.payload;
    },
    cleanUser: (auth, action) => {
      auth.user = {};
    },
  },
});

export const {authStart, authSuccess, cleanUser} = slice.actions;
export default slice.reducer;
