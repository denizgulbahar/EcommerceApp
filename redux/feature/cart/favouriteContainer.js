import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CartCard from './childs/CartCard';
import { useDispatch } from 'react-redux';
import { addToCartItem } from '../../store/slices/cartSlice';

// Header Component
const FavouritesHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Favoriler</Text>
    <MaterialIcons name="favorite" color="red" size={40} style={styles.headerIcon} />
  </View>
);
export const FavouriteContainer = ({ navigation }) => {
  const dispatch = useDispatch()

  const favouritedItems = [
    {"color": color.success, "id": 2, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 29.99, "size": "M", "title": "Casual T-Shirt"},
    {"color": color.black, "id": 3, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 79.99, "size": "L", "title": "Hooded Sweatshirt"},
    {"color": color.darkGrey, "id": 4, "image": "https://example.com/image4.jpg", "price": 39.99, "size": "S", "title": "Denim Jeans"},
    {"color": color.danger, "id": 5, "image": "https://example.com/image5.jpg", "price": 99.99, "size": "XL", "title": "Leather Jacket"},
    {"color": color.black, "id": 6, "image": "https://example.com/image6.jpg", "price": 19.99, "size": "M", "title": "Striped Polo Shirt"}
  ]

  // Function
  const handleAddToCart = (item) => {
    dispatch(addToCartItem(item));
    navigation.navigate("cart");
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      data={favouritedItems}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<FavouritesHeader />}
      renderItem={({ item }) => (
        <CartCard 
          item={item} 
          onPress={() => handleAddToCart(item)} 
          favourite={true} 
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  headerView: {
    flex: 1, 
    paddingVertical: 5,
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems:"center"
  },
  headerText: {
    fontSize: 26, 
    fontWeight: "bold",
},
});