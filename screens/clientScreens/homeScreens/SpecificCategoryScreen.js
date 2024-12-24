import {
  FlatList,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import InputOriginal from "../../../components/input/inputOriginal";
import { Feather } from "@expo/vector-icons";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
const SpecificCategoryScreen = ({ route, navigation }) => {
  
  const { data } = route.params
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
    if(data) {
      setProducts(data.products) 
    }
  },[data])
  
  return (
    <ScreenWrapper type="flatlist">
      <FlatList
        ListHeaderComponent={
          <>
            <InputOriginal  
              label="Ürün Ara"
              icon={<Feather name="search" size={24} color="black" /> }
              value={search}
              onChangeText={(v) => setSearch(v)}
            />
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