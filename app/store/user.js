import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    setNoUser: (state, action) => {
      state.currentUser = null;
    },
  },
});

export const {setCurrentUser, setNoUser} = userSlice.actions;
export default userSlice.reducer;
