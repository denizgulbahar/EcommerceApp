import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { color } from "../../styles/color";
import { generalStyles } from "../../styles/generalStyles";
import ButtonOriginal from "../buttons/buttonOriginal";
const width = Dimensions.get('window').width;
export const PreviousOrderContainer = ({ values }) => {
    const {t} = useTranslation()
    const texts = ["orderNumber", "orderDate", "orderProduct", "ÖdemeMiktarı"]
    const detailedTexts = ["teslimatAdresi", "teslimatAdSoyad", "teslimatTel", "odemeTipi"]
    const [detailed, setDetailed] = useState(false)
    const textFields = texts.map(input => ({
        label: t(input),
        value: values[input],
    }));
    const detailedFields = detailedTexts.map(input => ({
        label: t(input),
        value: values[input],
    }));
    useEffect(() => {
        return () => setDetailed(false)
    },[])
    const FieldComponent = ({ field }) => (
        <View style={{ flex: 1 ,flexDirection: "row" }} >
            <Text style={styles.inputLabel}>
                {field.label+" : " + field.value}
            </Text>
        </View> 
    )
    return(
        <View style={generalStyles.whiteRadiusContainer}>
            <View style={{ flex:1, flexDirection:"row" }}>
            <View style={{flex:1}}>
                {textFields.map((field,index) => 
                <FieldComponent field={field} key={index} />
                )}
            </View>
            <View style={{ paddingVertical:7 ,justifyContent: "flex-start" }}>
                <ButtonOriginal 
                    buttonStyle={{ 
                        width:100, 
                        backgroundColor:color.secondColor, 
                        height:70, 
                        padding:8,
                    }} 
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
    inputLabel: {
        textAlign: "left",
        fontSize: width > 500 ? 22 : 18,
        padding: 7,
    }
})



