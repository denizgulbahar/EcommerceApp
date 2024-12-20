import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { fonts } from "../../../../styles/fonts";
import { IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "../../../../styles/color";
import { useState } from "react";
import ImageLoader from "../../../../components/imageLoader";


const CartCard = ({ item, onPress, favourite }) => {

  const [loading, setLoading] = useState(false);
  const updateLoading = (state) => {
    setLoading(state);
  };

  return (
    <View style={styles.card}>
      <ImageLoader
        uri={item.image} 
        loading={loading} 
        updateLoading={updateLoading} 
      />
      {!loading && (
      <> 
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.textCircleContainer}>
            <View
              style={[
                styles.circle,
                { backgroundColor: item.color ? item.color : "red" },
              ]}
            />
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>{item.size}</Text>
            </View>
          </View>
        </View>
        <IconButton
          style={styles.icon}
          onPress={favourite ? onPress : () => onPress(item.id)}
          icon={() => (
            <MaterialCommunityIcons
              name={favourite ? "plus-circle" : "trash-can-outline"}
              color={favourite ? color.white : color.danger}
              size={40}
            />
          )}
        />
      </>
      )}
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#66B3FF",
    borderRadius: 10,
    marginBottom: 15,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    borderWidth: 1,
    borderColor: color.white,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: color.white,
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
  },
  textCircleContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
});

