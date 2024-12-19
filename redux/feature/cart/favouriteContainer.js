import { FlatList, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CartCard from './components/CartCard';
import { useDispatch } from 'react-redux';
import { addToCartItem } from '../../store/slices/cartSlice';
import { color } from '../../../styles/color';
import { favouritedItems } from '../../../data/favouritedItems';
// Header Component
const FavouritesHeader = () => (
  <View style={styles.headerContainer}>
    <MaterialIcons name="favorite" color="red" size={50} style={styles.headerIcon} />
    <Text style={styles.headerText}>Favoriler</Text>
  </View>
);
export const FavouriteContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  
  // Function
  const handleAddToCart = (item) => {
    dispatch(addToCartItem(item));
    navigation.navigate("my-cart");
  }

  return (
    <FlatList
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
    marginHorizontal: 5,
    marginVertical: 15,
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