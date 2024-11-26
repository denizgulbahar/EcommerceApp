import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null, 
    isLoggedIn: false 
  },
  reducers: {
    signIn(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signOut(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
