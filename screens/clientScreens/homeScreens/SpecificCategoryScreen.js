import { FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../../../components/ProductCard";
import InputOriginal from "../../../components/input/inputOriginal";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";
import { useTranslation } from "react-i18next";
const SpecificCategoryScreen = ({ route, navigation }) => {
  const { t } = useTranslation()
  const { data } = route.params
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  const passToProductDetails = (item) => {
    // console.log("item:",item)
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
    // Optional chaining to avoid potential errors when data is undefined or null
    if(data?.products) { 
      setProducts(data.products) 
    }
  },[data])

  const filteredProducts = useCallback(() => {
    if (search === "") {
      return products; // Show all products when search is empty
    }
    return products.filter((prod) =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);
  
  
  return (
    <ScreenWrapper>
      <FlatList
        ListHeaderComponent={
          <>
            <InputOriginal  
              placeholder={t("searchProduct")}
              icon="magnify"
              value={search}
              onChangeText={(v) => setSearch(v)}
            />
          </>
        }
        scrollEnabled={false}
        data={filteredProducts()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            passToProductDetails={passToProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default SpecificCategoryScreen;