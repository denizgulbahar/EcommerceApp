import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { addToCartItem } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
const ProductDetailsContainer = ({ route, navigation }) => {

  const dispatch = useDispatch()

  const product = route.params.item;
  // Cloths Sizes
  const sizes = ["S", "M", "L", "XL"];

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");

  const handleAddToCart = () => {
      product.color = selectedColor;
      product.size = selectedSize;
      dispatch(addToCartItem(product));
      navigation.navigate("cart");
  };

  return (
    <>
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
      <View style={styles.productContainer}>
        {colorsArray.map((color, index) => (
        <ButtonOriginal
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
        </ButtonOriginal>
        ))}
      </View>
      <ButtonOriginal
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        title="Add to Cart"
        onPress={handleAddToCart}
      />
    </>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
export default ProductDetailsContainer;