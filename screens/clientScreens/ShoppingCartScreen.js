import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../components/CartCard";
import { fonts } from "../../styles/fonts";
import { CartContext } from "../../contexts/CartContext";
import { color } from "../../styles/color";
import { generalStyles } from "../../styles/generalStyles";
import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import ButtonOriginal from "../../components/buttons/buttonOriginal";

const ShoppingCartScreen = ({ }) => {
  const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);
  const[cargoPrice, setCargoPrice] = useState(false)
  const handleDeleteItem = async (id) => {
    await deleteCartItem(id);
  };
  function handlePrecision(num1, num2) {
    var precision = 100 // 2 decimal parts
    var result = (num1 * precision + num2 * precision) / precision
    return result;
}
useEffect(() => {
  if (totalPrice > 300 || cartItems.length === 0) {
    setCargoPrice(0);
  } else {
    setCargoPrice(15);
  }
}, [totalPrice, cartItems.length]);
  const paymentData = [
    { title: 'Toplam:', value: totalPrice },
    { title: 'Kargo:', value: cargoPrice },
    { title: 'Genel Toplam:', value: handlePrecision(totalPrice, cargoPrice) },
  ];
  return (
    <ScreenWrapper>
        <FlatList
          style={styles.outerContainer}
          data={cartItems}
          renderItem={({ item }) => (
            <CartCard item={item} handleDelete={handleDeleteItem} />
          )}
          ListFooterComponent={
            <>
              <View style={styles.bottomContentContainer}>
              {paymentData.map((item, index) => (
                  <View key={index} style={styles.flexRowContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.priceText}>{item.value}</Text>
                  </View>
              ))}
                <View style={styles.checkout}>
                <Text style={styles.checkoutText}>
                  Toplam
                </Text>
              </View>
              </View>
              { cartItems.length!==0 &&
              <ButtonOriginal 
                buttonStyle={{ margin: 40 }} 
                title="Sepeti Onayla" 
                onPress={() => Alert.alert("Siparişiniz Alındı")} 
              />
              }
            </>
          }
        />
    </ScreenWrapper>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  outerContainer: {
      flex: 1,
  },
  flexRowContainer: {
    ...generalStyles.rowContainer,
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 8,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  checkout: {
    backgroundColor: color.cottonCandyRed,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 10,
  },
  checkoutText: {
    fontSize: 24,
    color: color.white,
    fontFamily: fonts.regular,
  },
});