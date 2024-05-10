import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { color } from "../../styles/color";
import globalStyles from "../../styles/GlobalStyles";
const width = Dimensions.get('window').width;

const ButtonOriginal = ({ title, onPress, buttonStyle, textStyle }) => {
  function handlePress() {
    onPress();
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonContainer, buttonStyle]}
      onPress={handlePress}
    >
      <Text style={[globalStyles(width).buttonText, textStyle]} numberOfLines={2} >{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOriginal;
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderWidth: 0,
    backgroundColor: color.white,
    borderColor: color.mainColor,
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderRadius: 12,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});