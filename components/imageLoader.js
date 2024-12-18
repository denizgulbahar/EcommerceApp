import React from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import { color } from "../styles/color";

const ImageLoader = ({ uri, loading, updateLoading, imageStyle }) => {
  return (
    <View style={styles.imageContainer}>
      {loading && (
        <ActivityIndicator 
          size="large" 
          color={color.white} 
          style={styles.activityIndicator} 
        />
      )}
      <Image
        source={{ uri }}
        style={[styles.image, imageStyle]}
        onLoadStart={() => updateLoading(true)}
        onLoad={() => updateLoading(false)} // When image is loaded
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  activityIndicator: {
    flex: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
        { translateX: -20 }, { translateY: -20 }
    ],
  },
});

export default ImageLoader;
