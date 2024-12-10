// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null, 
    isLoggedIn: false,
    language: 'tr', // Initial Language
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
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { signIn, signOut, setLanguage } = authSlice.actions;

export default authSlice.reducer;

