import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import CartCard from '../../redux/feature/cart/childs/CartCard';
import { color } from "../../styles/color";
import { CartContext } from "../../contexts/CartContext";
import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { MaterialIcons } from "@expo/vector-icons";
import { generalStyles } from "../../styles/generalStyles";
export default function FavouriteScreen ({ navigation }) {
  const favouritedItems = [
    {"color": color.success, "id": 2, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 29.99, "size": "M", "title": "Casual T-Shirt"},
    {"color": color.black, "id": 3, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 79.99, "size": "L", "title": "Hooded Sweatshirt"},
    {"color": color.darkGrey, "id": 4, "image": "https://example.com/image4.jpg", "price": 39.99, "size": "S", "title": "Denim Jeans"},
    {"color": color.danger, "id": 5, "image": "https://example.com/image5.jpg", "price": 99.99, "size": "XL", "title": "Leather Jacket"},
    {"color": color.black, "id": 6, "image": "https://example.com/image6.jpg", "price": 19.99, "size": "M", "title": "Striped Polo Shirt"}
  ]
  const value = useContext(CartContext);
  // Selected change with data Ones
  const handleAddToCart = async(item) => {
    try{
      await value.addToCartItem(item);
    }catch(e) {
      console.error("Product adding error")
    } finally{
      navigation.navigate("cart")
    }
  };
  return (
    <ScreenWrapper>
      <FlatList
        style={{ flex: 1}}
        data={favouritedItems}
        ListHeaderComponent={
          () => (
            <View style={styles.headerView}>
              <Text style={generalStyles.header}>
                Favoriler
              </Text>
              <MaterialIcons
              style={{ marginLeft: 20}}
              name={"favorite"} 
              color="red"
              size={40}
                />
            </View>
          )
        }
        renderItem={({ item }) => (
          <CartCard 
            item={item} 
            onPress={() => handleAddToCart(item)} 
            favourite={true} 
          />
        )}
      />
    </ScreenWrapper>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  headerView: {
    flex: 1, 
    paddingVertical: 5,
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems:"center"
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    margin: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});