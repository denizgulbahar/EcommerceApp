import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // To sum up using reduce method and decimal part restrict by 2 numbers
  const calculateTotalPrice = (items) => {

    const totalSum = items.reduce((total, item) => total + item.price, 0).toFixed(2);
    setTotalPrice(totalSum);
  };

  const updateCartItems = async (newCartItems) => {

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(newCartItems));
      setCartItems(newCartItems);
      calculateTotalPrice(newCartItems);
    } catch (error) {
      console.error("Error updating cart items:", error);
    }
  };

  const addToCartItem = async (item) => {

    try {
      let updatedCartItems = [...cartItems];
      let isExist = updatedCartItems.findIndex((cart) => cart.id === item.id);
      // If dont exist findIndex
      if (isExist === -1) {
        updatedCartItems.push(item);
        await updateCartItems(updatedCartItems);
      } 
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const deleteCartItem = async (id) => {

    try {
      let updatedCartItems = cartItems.filter((item) => item.id !== id);
      await updateCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const loadCartItems = async () => {

    try {
      const storedCartItems = await AsyncStorage.getItem("cart");
      let parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
      setCartItems(parsedCartItems);
      calculateTotalPrice(parsedCartItems);
    } catch (error) {
      console.error("Error loading cart items:", error);
    }
  };
  // Load cart items when the component mounts
  useEffect(() => {
    loadCartItems();
  }, []);

  const contextValue = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

