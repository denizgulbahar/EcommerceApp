import { FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../../../components/ProductCard";
import InputOriginal from "../../../components/input/inputOriginal";
import { Feather } from "@expo/vector-icons";
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
    <ScreenWrapper type="flatlist">
      <FlatList
        ListHeaderComponent={
          <>
            <InputOriginal  
              placeholder={t("searchProduct")}
              icon={<Feather name="search" size={24} color="black" /> }
              value={search}
              onChangeText={(v) => setSearch(v)}
            />
          </>
        }
        data={filteredProducts()}
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