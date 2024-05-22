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
import { GradientWrapper } from "../../../components/wrappers/gradientWrapper";
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
          console.log("prod: ", prod);
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
    <GradientWrapper>
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
              <Tags />
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
      <View>
      </View>
    </GradientWrapper>
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