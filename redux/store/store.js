import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
      auth: authReducer,   // authReducer will manage 'auth' state
      cart: cartReducer,   // cartReducer will manage 'cart' state
    },
  });

export default store;
