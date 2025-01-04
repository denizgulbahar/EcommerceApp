import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { color } from '../../styles/color';

export const BackButton = ({ navigation, absolute = false }) => {
  return (
    <View style={[styles.iconButtonView, absolute && { position: "absolute"}]}>
        <IconButton
            icon="arrow-left"
            size={24}
            iconColor={color.white}
            onPress={() => navigation.goBack()}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  iconButtonView:{
    position: "relative",
    zIndex: 1,
    top: 20,
    left: 10,
    width:40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: color.secondColor, 
    justifyContent: "center", 
    alignItems: "center" 
  }
})
