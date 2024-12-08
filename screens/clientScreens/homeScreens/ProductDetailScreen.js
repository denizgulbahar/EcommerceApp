import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { addToCart } from "../../../utilities/helper"
import { CartContext } from "../../../contexts/CartContext"
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import { fonts } from "../../../styles/fonts";
import { color } from "../../../styles/color";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
import { generalStyles } from "../../../styles/generalStyles";
import ProductAddButton from "../../../redux/feature/cart/productDetailsContainer.js";

const colorsArray = [
  color.darkGrey,
  color.danger,
  color.white,
  color.black,
  color.success
];

const ProductDetailScreen = ({ route, navigation }) => {
  
  

  return (
    <ScreenWrapper>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.coverImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.productContainer}>
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.text}>${product.price}</Text>
          </View>
          <ProductDetailsContainer route={route} navigation={navigation} />
        </View>
    </ScreenWrapper>
   
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
  },
  imageContainer: {
    height: 420,
    width: "100%",
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.regular,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  sizeValue: {
    height: 50,
    width: 50,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sizeValueText: {
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  selectedText: {
    color: color.cottonCandyRed,
  },
  borderColorCircle: {
    height: 50,
    width: 50,
    padding: 7,
    marginRight: 10,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: color.cottonCandyRed,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: color.white,
    fontFamily: fonts.regular
  },
});