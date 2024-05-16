import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { color } from "../../styles/color";
import { generalStyles } from "../../styles/generalStyles";
import ButtonOriginal from "../buttons/buttonOriginal";
const width = Dimensions.get('window').width;
export const PreviousOrderContainer = ({ values }) => {
    const texts = ["SiparisTarihi", "SiparisUrunu", "OdemeToplam"]
    const detailedTexts = ["TeslimatAdresi", "TeslimatAdSoyad", "TeslimatTel", "OdemeTipi"]
    const [detailed, setDetailed] = useState(false)
    const textFields = texts.map(input => ({
        label: input,
        value: values[input],
    }));
    const detailedFields = detailedTexts.map(input => ({
        label: input,
        value: values[input],
    }));
    useEffect(() => {
        return () => setDetailed(false)
    },[])
    const FieldComponent = ({ field }) => (
        <View style={{ flexDirection: "row" }} >
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
            <View style={{ justifyContent: "space-around" }}>
                <ButtonOriginal 
                    buttonStyle={{ 
                        width:100, 
                        backgroundColor:color.secondColor, 
                        height:70, 
                        padding:8 
                    }} 
                    title={detailed ? "Detay Kapat" : "Detay"}
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
        paddingVertical: 10,
        paddingHorizontal:7
    }
})



