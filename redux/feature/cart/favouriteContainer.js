import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CartCard from './childs/CartCard';
import { useDispatch } from 'react-redux';
import { addToCartItem } from '../../store/slices/cartSlice';
import { color } from '../../../styles/color';
// Header Component
const FavouritesHeader = () => (
  <View style={styles.headerContainer}>
    <MaterialIcons name="favorite" color="red" size={50} style={styles.headerIcon} />
    <Text style={styles.headerText}>Favoriler</Text>
  </View>
);
export const FavouriteContainer = ({ navigation }) => {
  const dispatch = useDispatch()

  const favouritedItems = [
    {"color": color.success, "id": 2, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 29.99, "size": "M", "title": "Casual T-Shirt"},
    {"color": color.black, "id": 3, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 79.99, "size": "L", "title": "Hooded Sweatshirt"},
    {"color": color.darkGrey, "id": 4, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 39.99, "size": "S", "title": "Denim Jeans"},
    {"color": color.danger, "id": 5, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 99.99, "size": "XL", "title": "Leather Jacket"},
    {"color": color.black, "id": 6, "image": "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "price": 19.99, "size": "M", "title": "Striped Polo Shirt"}
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
  headerIcon: {
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 26, 
    fontWeight: "bold",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.black
  },
  headerView: {
    flex: 1, 
    paddingVertical: 5,
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems:"center"
  },
});