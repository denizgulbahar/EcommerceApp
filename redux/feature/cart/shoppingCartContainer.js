import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import CartCard from './childs/CartCard';
import { PaymentComponent } from './childs/PaymentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems, deleteCartItem, confirmCart } from '../../store/slices/cartSlice';
export const ShoppingCartContainer = () => {

  const dispatch = useDispatch()

  // Redux States
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  
  // Confirm Button Condition
  const hasItems = Array.isArray(cartItems) && cartItems.length > 0;

  // LifeCycles
  useEffect(() => {
    dispatch(loadCartItems());
  },[dispatch])

  // Functions
  const handleDeleteItem = (id) => {
    dispatch(deleteCartItem(id));
  };
  const handleConfirmCart = () => {
    dispatch(confirmCart());
  };

  return (
    <FlatList
      style={{ marginBottom: 50 }}
      data={cartItems}
      renderItem={({ item }) => (
      <CartCard item={item} onPress={handleDeleteItem} />
      )}
      ListFooterComponent={
        <>
          {/* Payment Info */}
          <PaymentComponent cartItems={cartItems} totalPrice={totalPrice} />
          {/* Confirm Basket Button */}
          {hasItems && (
            <ButtonOriginal 
              buttonStyle={{ margin: 40 }} 
              title="Sepeti Onayla" 
              onPress={handleConfirmCart} 
            />
          )}
        </>
      }
  />
  );
};
