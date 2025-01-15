import React, { useEffect, useTransition } from 'react';
import { Alert, FlatList } from 'react-native';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import CartCard from './components/CartCard';
import { PaymentComponent } from './components/PaymentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems, deleteCartItem, clearCartAsync } from '../../store/slices/cartSlice';
import { color } from '../../../styles/color';
import { useTranslation } from 'react-i18next';
import listOrderDetails from './utilities/listOrderDetails';
export const ShoppingCartContainer = ({ navigation }) => {
  // Translation 
  const { t } = useTranslation()
  // Dispatch to Redux Func Calls
  const dispatch = useDispatch()

  // Redux States
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const state = useSelector((state) => state.cart)
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
    const data = listOrderDetails({ state, t });
  
    // First alert for cart confirmation
    Alert.alert(t("cartConfirmed"), '', [
      {
        text: 'OK',
        onPress: async () => {
          // Show the order details alert after confirmation
          Alert.alert(data, '', [
            {
              text: 'OK',
              onPress: async () => {
                try {
                  // Dispatch the clearCartAsync thunk to clear the cart from AsyncStorage
                  await dispatch(clearCartAsync()); // Dispatch the async thunk
  
                  // Dispatch to delete all items from the cart
                  state.cartItems.forEach(item => {
                    dispatch(deleteCartItem(item.id));
                  });
  
                  // Show success alert
                  Alert.alert(t("cartCleared"));
                } catch (error) {
                  // Show error alert
                  Alert.alert(t("cartClearedFail") + error.message);
                } finally {
                  // Navigate to the home screen
                  navigation.navigate('home');
                }
              },
            },
          ]);
        },
      },
    ]);
  };
  
  const paymentText = {
    "total": t("total"),
    "cargo": t("cargo"),
    "generalTotal": t("generalTotal") 
  }
  return (
    <FlatList
      scrollEnabled={false}
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
