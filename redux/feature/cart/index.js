import React from 'react';
import { FlatList } from 'react-native';
import CartCard from './childs/CartCard';
import { PaymentComponent } from './childs/PaymentComponent';

export const CartContainer = () => {

  // Redux Info

  const hasItems = Array.isArray(cartItems) && cartItems.length > 0;

  const handleDeleteItem = async (id) => {
    await deleteCartItem(id);
  };

  return (
    <FlatList
        style={{ flex: 1 }}
        data={cartItems}
        renderItem={({ item }) => (
        <CartCard item={item} onPress={handleDeleteItem} />
        )}
        ListFooterComponent={
        <>
          {/* Payment Info */}
          <PaymentComponent cartItems={cartItems} totalPrice={totalPrice} />
          {/* Confirm Basket Button */}
          { hasItems && (
              <ButtonOriginal 
                buttonStyle={{ margin: 40 }} 
                title="Sepeti Onayla" 
                onPress={() => Alert.alert("Siparişiniz Alındı")} 
              />
          )}
        </>
        }
  />
  );
};
