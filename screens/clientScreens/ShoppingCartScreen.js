import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import CartCard from "../../components/CartCard";
import { fonts } from "../../styles/fonts";
import { CartContext } from "../../contexts/CartContext";
import { GradientWrapper } from "../../components/wrappers/gradientWrapper";
import { color } from "../../styles/color";
import { generalStyles } from "../../styles/generalStyles";

const ShoppingCartScreen = () => {
  const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);

  const handleDeleteItem = async (id) => {
    await deleteCartItem(id);
  };
  const paymentData = [
    { title: 'Toplam:', value: '₺350.00' },
    { title: 'Kargo:', value: '₺15.00' },
    { title: 'Genel Toplam:', value: '₺365.00' },
  ];
  return (
    <GradientWrapper>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartCard item={item} handleDelete={handleDeleteItem} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
            {paymentData.map((item, index) => (
                <View key={index} style={styles.flexRowContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.priceText}>{item.value}</Text>
                </View>
            ))}
            </View>
            <Text style={styles.checkout}>
              <Text style={styles.checkoutText}>
                Checkout
              </Text>
            </Text>
          </>
        }
      />
    </GradientWrapper>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  flexRowContainer: {
    ...generalStyles.rowContainer,
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
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
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  checkout: {
    backgroundColor: "#E96E6E",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  checkoutText: {
    fontSize: 24,
    color: color.white,
    fontFamily: fonts.regular,
  },
});