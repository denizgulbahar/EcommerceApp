import { color } from "../../../../styles/color";
import { View, Text, StyleSheet } from 'react-native';
import ButtonOriginal from '../../../../components/buttons/buttonOriginal';
import { fonts } from "../../../../styles/fonts";
export const SizeSelector = ({ selectedSize, updateSize }) => {
    // Cloths Data
    const sizes = ["S", "M", "L", "XL"];
    return (
    <>
        <Text style={styles.text}>Size</Text>
        <View style={styles.sizeContainer}>
        {sizes.map((size) => (
            <ButtonOriginal
            key={size}
            buttonStyle={styles.sizeValue}
            textStyle={[
                styles.sizeValueText,
                selectedSize === size && styles.selectedText,
            ]}
            title={size}
            onPress={() => updateSize(size)}
            />
        ))}
        </View>
    </>
    )
}

export const ColorSelector = ({ selectedColor, updateColor }) => {
    // Cloths Data
    const colorsArray = [color.white, color.black,  color.roseRed]
    return (
        <>
        <Text style={styles.text}>Color</Text>
        <View style={styles.colorContainer}>
            {colorsArray.map((color, index) => (
            <ButtonOriginal
                key={index}
                onPress={() => updateColor(color)}
            >
                <View
                style={[
                    styles.borderColorCircle,
                    selectedColor === color && {
                    borderColor: color,
                    borderWidth: 2,
                    borderRadius: 25,
                    },
                ]}
                >
                <View style={[styles.colorCircle, { backgroundColor: color }]} />
                </View>
            </ButtonOriginal>
            ))}
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    colorContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      fontSize: 20,
      fontFamily: fonts.regular,
      fontWeight: "bold",
      marginBottom: 20,
    },
    sizeContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    sizeValue: {
      height: 50,
      width: 50,
      padding: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    sizeValueText: {
      fontSize: 18,
      fontFamily: fonts.regular,
    },
    selectedText: {
      color: color.cottonCandyRed,
    },
    borderColorCircle: {
      height: 50,
      width: 50,
      padding: 7,
      marginRight: 10,
    },
    colorCircle: {
      flex: 1,
      borderRadius: 18,
    },
});
  