import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { color } from "../../styles/color";
import ButtonOriginal from "../buttons/buttonOriginal";
const width = Dimensions.get('window').width;
export const PreviousOrderContainer = ({ values }) => {
    const {t} = useTranslation()
    const texts = ["orderNumber", "orderDate", "orderProduct", "ÖdemeMiktarı"]
    const detailedTexts = ["teslimatAdresi", "teslimatAdSoyad", "teslimatTel", "odemeTipi"]
    const [detailed, setDetailed] = useState(false)
    const textFields = texts.map(input => ({
        placeholder: t(input),
        value: values[input],
    }));
    const detailedFields = detailedTexts.map(input => ({
        placeholder: t(input),
        value: values[input],
    }));
    useEffect(() => {
        return () => setDetailed(false)
    },[])
    const FieldComponent = ({ field }) => (
        <View style={styles.row} >
            <Text style={styles.inputPlaceholder}>
                {field.placeholder+" : " + field.value}
            </Text>
        </View> 
    )
    return(
        <View style={styles.outContainer}>
            <View style={styles.row}>
            <View style={{ flex: 1 }}>
                {textFields.map((field,index) => 
                <FieldComponent field={field} key={index} />
                )
                }
            </View>
            <View style={{ justifyContent: "flex-start", paddingVertical: 7 }}>
                <ButtonOriginal 
                    buttonStyle={styles.detailButton} 
                    title={detailed ? "Detay Kaldır" : "Detay"}
                    onPress={() => setDetailed(!detailed)} 
                />
            </View>
            </View>
            {detailed && detailedFields.map((field, index) => (
            <FieldComponent 
                field={field} 
                key={index} 
            />
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
    },
    inputPlaceholder: {
        textAlign: "left",
        fontSize: width > 500 ? 22 : 18,
        padding: 7,
    },
    outContainer: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        backgroundColor: color.white,
        borderColor: color.white,
        shadowColor: color.black,
        shadowOpacity: 1,
    },
    detailButton: { 
        width: 100, 
        backgroundColor: color.secondColor, 
        height: 70, 
        padding: 8,
    }
})



