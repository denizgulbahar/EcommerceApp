import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import calculateTotalPrice from "../../feature/cart/utilities/calculateTotalPrice";

// Async Storage persists data (e.g., cart state) across app restarts.
// Redux state is in memory only, so we use Async Storage to restore it.

// Async thunk for loading cart items from AsyncStorage
// Auto-Generated Action
export const loadCartItems = createAsyncThunk(
  "cart/loadCartItems",
  async () => {
    const storedCartItems = await AsyncStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }
);
// Define the async thunk for clearing the cart
export const clearCartAsync = createAsyncThunk(
  'cart/clearCartAsync',
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem('cart'); // Clear the cart in AsyncStorage
      return true;
    } catch (error) {
      return rejectWithValue('Failed to clear cart');
    }
  }
);
// Action always is an object
// const exampleAction = {
//   type: "cart/addToCartItem", // Slice.name + / + reducerName // İşlemin Türü
//   payload: { id: 1, name: "Oyuncak Ayı", price: 10 } // Action'u başlatmak için gereken veriyi taşır.
// };

// NOT: Reducerların temel kuralı, saf (pure) fonksiyonlar olmalı. 
// Yani yan etkilerden (side effects) uzak olmalı.
// Örneğin, bir reducer'ın API çağrısı yapması veya bir dosya kaydetmesi doğru değildir.

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCartItem: (state, action) => {
      const item = action.payload;
      const existingIndex = state.cartItems.findIndex((cart) => cart.id === item.id);
      if (existingIndex === -1) {
        state.cartItems.push(item);
        calculateTotalPrice(state);
        AsyncStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    deleteCartItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      calculateTotalPrice(state);
      AsyncStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: (builder) => {
    // When the async operation is successful, calculateTotalPrice is executed
    builder.addCase(loadCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      calculateTotalPrice(state);
    });
  },
});

export const { addToCartItem, deleteCartItem, confirmCart } = cartSlice.actions;

export default cartSlice.reducer;
