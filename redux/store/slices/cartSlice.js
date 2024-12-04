import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import calculateTotalPrice from "../../feature/cart/utilities/calculateTotalPrice";
import listOrderDetails from "../../feature/cart/utilities/listOrderDetails";

// Async Storage persists data (e.g., cart state) across app restarts.
// Redux state is in memory only, so we use Async Storage to restore it.

// Async thunk for loading cart items from AsyncStorage
export const loadCartItems = createAsyncThunk(
  "cart/loadCartItems",
  async () => {
    const storedCartItems = await AsyncStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
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
    confirmCart: (state) => {
      // Simulate submission with an alert
      const orderData = {
        items: state.cartItems,
        totalPrice: state.totalPrice,
      };

      // First alert for submission confirmation
      Alert.alert('Your cart has been successfully confirmed!', [
        {
          text: 'OK',
          onPress: () => {
            // Use the helper function to list order details
            const orderDetails = listOrderDetails(orderData.items, orderData.totalPrice);
            Alert.alert('Order Data', orderDetails, [
              {
                text: 'OK',
                onPress: () => {
                  // Clear the cart after user confirms the order data alert
                  state.cartItems = [];
                  state.totalPrice = 0;
                  AsyncStorage.removeItem('cart'); // Clear stored cart data
                },
              },
            ]);
          },
        },
      ]);
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

export const { addToCartItem, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
