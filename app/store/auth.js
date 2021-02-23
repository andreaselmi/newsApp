import {createSlice} from '@reduxjs/toolkit';
import {slice} from 'lodash';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    setNoUser: (state, action) => {
      state.user = null;
    },
  },
});

export const {setCurrentUser, setNoUser} = authSlice.actions;
export default authSlice.reducer;
