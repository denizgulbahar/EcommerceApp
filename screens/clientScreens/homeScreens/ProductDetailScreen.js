import { StyleSheet, Text, View, Button } from "react-native";
import { fonts } from "../../../styles/fonts";
import { color } from "../../../styles/color";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
import ProductDetailsContainer from "../../../redux/feature/cart/productDetailsContainer";
import ImageLoader from "../../../components/imageLoader";
import { useState } from "react";
import { BackButton } from "../../../components/buttons/backButton";

const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params
  // console.log("product:",item)
  const [loading, setLoading] = useState(false)
  const updateLoading = (loading) => {
    setLoading(loading)
  }
  return (
    <ScreenWrapper>
      <BackButton navigation={navigation} absolute />
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
  imageStyle: {
    marginTop: 10,
    height: 420,
    width: "100%",
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
});