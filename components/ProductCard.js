import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Loading from "../components/loading/loading";
import ButtonOriginal from "./buttons/buttonOriginal";
const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {

  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleProductClick(item)}
    >
      {loading &&  <Loading /> }
      <Image source={{ uri: item.image }} style={styles.coverImage}  onLoad={handleImageLoad}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₺{item.price}</Text>
      </View>
      <View style={styles.likeContainer}>
        <IconButton
          icon={({ }) => (
            <MaterialIcons 
              name={item.isFavorite ? "favorite" : "favorite-border"} 
              color="red"
              size={30}
            />
          )}
          style={{ width: 30, height: 30 }}
          onPress={() => toggleFavorite(item)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    margin: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    borderRadius: 20,
    right: 10,
    top: 10,
  },
});
