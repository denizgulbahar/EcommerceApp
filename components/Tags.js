import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { fonts } from "../styles/fonts";
import dataMen from "../data/topTabData/dataMen.json"
import dataWomen from "../data/topTabData/dataWomen.json"
import dataTrending from "../data/topTabData/dataTrending.json"
import dataNew from "../data/topTabData/dataNew.json"
const Tags = ({ setProducts }) => {
  const [selected, setSelected] = useState("Trending Now");
  const tags = [
    { title: "Trending Now", data: dataTrending.products },
    { title: "New", data: dataNew.products },
    { title: "Women", data: dataWomen.products },
    { title: "Men", data: dataMen.products }
  ]
  function changeTag (item) {
    setSelected(item.title)
    setProducts(item.data)
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => changeTag(item)}>
              <Text
                style={[
                  styles.tagText,
                  item.title == selected ? styles.isSelected : null,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tagText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#DFDCDC",
    color: "#938F8F",
    fontWeight: "700",
  },
  isSelected: {
    backgroundColor: "#E96E6E",
    color: "#FFFFFF",
  },
  container: {
    marginVertical: 10,
  },
});
