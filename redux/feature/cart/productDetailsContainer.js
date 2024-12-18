import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { addToCartItem } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { fonts } from '../../../styles/fonts';
import { color } from '../../../styles/color';
import { SizeSelector, ColorSelector } from './components/productComponent';
const ProductDetailsContainer = ({ route, navigation }) => {

  const dispatch = useDispatch()

  const product = route.params.item;

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");

  const handleAddToCart = () => {
    product.color = selectedColor;
    product.size = selectedSize;
    dispatch(addToCartItem(product));
    navigation.navigate("cart");
  };
  const updateSize = (size) => {
    setSelectedSize(size)
  }
  const updateColor = (color) => {
    setSelectedColor(color)
  }

  return (
    <>
      <SizeSelector
        selectedSize={selectedSize}
        updateSize={updateSize}
      />
      <ColorSelector
        selectedColor={selectedColor}
        updateColor={updateColor}
      />
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