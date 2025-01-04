import React, { useEffect, useTransition } from 'react';
import { FlatList } from 'react-native';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import CartCard from './components/CartCard';
import { PaymentComponent } from './components/PaymentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems, deleteCartItem, confirmCart } from '../../store/slices/cartSlice';
import { color } from '../../../styles/color';
import { useTranslation } from 'react-i18next';
export const ShoppingCartContainer = ({ navigation }) => {
  // Translation 
  const { t } = useTranslation()
  // Dispatch to Redux Func Calls
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
      navigation.navigate("home")
  };
  const paymentText = {
    "total": t("total"),
    "cargo": t("cargo"),
    "generalTotal": t("generalTotal") 
  }
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
          <PaymentComponent 
            cartItems={cartItems} 
            totalPrice={totalPrice} 
            paymentText={paymentText} 
          />
          {/* Confirm Basket Button */}
          {hasItems && (
            <ButtonOriginal 
              buttonStyle={{ margin: 40, backgroundColor: color.white }} 
              title={t("confirmCart")} 
              onPress={handleConfirmCart} 
            />
          )}
        </>
      }
  />
  );
};
