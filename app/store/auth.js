import {createSlice} from '@reduxjs/toolkit';
import {slice} from 'lodash';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    currentUser: (state, action) => {
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
  },
});

export const {currentUser} = authSlice.actions;
export default authSlice.reducer;
