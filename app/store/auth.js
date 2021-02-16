import {createSelector, createSlice} from '@reduxjs/toolkit';
import {auth} from '@react-native-firebase/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    authUser: (auth, action) => {
      auth.user = action.payload;
      auth.isAuthenticated = true;
    },
    logoutUser: (auth) => {
      auth.user = null;
      auth.isAuthenticated = false;
    },
  },
});

export const {authUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;
