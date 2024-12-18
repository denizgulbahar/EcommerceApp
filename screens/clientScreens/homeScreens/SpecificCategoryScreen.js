import {
  FlatList,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Tags from "../../../components/Tags";
import ProductCard from "../../../components/ProductCard";
import data from "../../../data/topTabData/dataTrending.json";
import InputOriginal from "../../../components/input/inputOriginal";
import { Feather } from "@expo/vector-icons";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
const SpecificCategoryScreen = ({ navigation }) => {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  const passToProductDetails = (item) => {
    console.log("item:",item)
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
  useEffect(() => {
   setProducts(data.products) 
  })
  return (
    <ScreenWrapper type="flatlist">
      <FlatList
        ListHeaderComponent={
          <>
              <View>
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
            passToProductDetails={passToProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
};

export default SpecificCategoryScreen;