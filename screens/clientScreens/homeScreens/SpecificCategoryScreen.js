import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Tags from "../../../components/Tags";
import ProductCard from "../../../components/ProductCard";
import data from "../../../data/dataTrending.json";
import InputOriginal from "../../../components/input/inputOriginal";
import { Feather } from "@expo/vector-icons";
import { fonts } from "../../../styles/fonts";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
const SpecificCategoryScreen = ({ navigation }) => {
  const [products, setProducts] = useState(data.products);
  const [search, setSearch] = useState("")
  const handleProductDetails = (item) => {
    navigation.navigate("details", { item });
  };
  const toggleFavorite = (item) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            isFavorite: !prod.isFavorite,
          };
        }
        return prod;
      })
    );
  };
  return (
    <ScreenWrapper type="flatlist">
      <FlatList
        ListHeaderComponent={
          <>
              <View>
                <Text style={styles.headingText}>Match Your Style</Text>
                <InputOriginal  
                  label="Ürün Ara"
                  icon={() => 
                  <Feather name="search" size={24} color="black" />
                  }
                  onChangeText={(v) => setSearch(v)}
                />
              </View>
              <Tags setProducts={setProducts} />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
};

export default SpecificCategoryScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    marginVertical: 20,
    fontFamily: fonts.italic
  },
});