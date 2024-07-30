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
const colorsArray = [
  color.darkGrey,
  color.danger,
  color.white,
  color.black,
  color.success
];

const ProductDetailScreen = ({ navigation }) => {
  const value = useContext(CartContext);
  const route = useRoute();
  const product = route.params.item;
  console.log("pro",product)
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");
  const handleAddToCart = async() => {
    try{
      product.color = selectedColor;
      product.size = selectedSize;
      await value.addToCartItem(product);
    }catch(e) {
      console.error("Product adding error")
    } finally{
      navigation.navigate("cart")
    }
  };
  // Cloths Sizes
  const sizes = ["S", "M", "L", "XL"];

  return (
    <ScreenWrapper>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.coverImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={generalStyles.rowContainer}>
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.text}>${product.price}</Text>
          </View>
          <Text style={styles.text}>Size</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size) => (
            <ButtonOriginal
              key={size}
              buttonStyle={styles.sizeValue}
              textStyle={[
                styles.sizeValueText,
                selectedSize === size && styles.selectedText,
              ]}
              title={size}
              onPress={() => setSelectedSize(size)}
            />
            ))}
          </View>
          <Text style={styles.text}>Color</Text>
          <View style={generalStyles.rowContainer}>
            {colorsArray.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(color)}
            >
              <View
                style={[
                  styles.borderColorCircle,
                  selectedColor === color && {
                    borderColor: color,
                    borderWidth: 2,
                    borderRadius: 25,
                  },
                ]}
              >
                <View 
                  style={[styles.colorCircle, { backgroundColor: color }]}
                />
              </View>
            </TouchableOpacity>
            ))}
          </View>
          <ButtonOriginal
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            title="Add to Cart"
            onPress={handleAddToCart}
          />
        </View>
    </ScreenWrapper>
   
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
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