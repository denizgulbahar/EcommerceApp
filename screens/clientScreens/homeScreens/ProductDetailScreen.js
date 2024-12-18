import { Image, StyleSheet, Text, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import { color } from "../../../styles/color";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
import ProductDetailsContainer from "../../../redux/feature/cart/productDetailsContainer";
import ImageLoader from "../../../components/imageLoader";
import { useState } from "react";

const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params
  console.log("product:",item)
  const [loading, setLoading] = useState(false)
  const updateLoading = (loading) => {
    setLoading(loading)
  }
  return (
    <ScreenWrapper>
        <ImageLoader 
          uri={item.image} 
          loading={loading}
          updateLoading={updateLoading}
          imageStyle={styles.imageStyle}
        />
        <View style={styles.contentContainer}>
          <View style={styles.productContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>${item.price}</Text>
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
  imageStyle: {
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