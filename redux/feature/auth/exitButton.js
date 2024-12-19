import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import { color } from "../../../styles/color";
import { signOut } from "../../store/slices/authSlice"
const ExitButton = () => {
    const dispatch = useDispatch()
    const ButtonTitleComponent = () => (
        <View style={styles.buttonTitleView}>
            <MaterialCommunityIcons name="exit-to-app" size={36} color={color.redstrong} />
            <Text style={styles.header}>Çıkış Yap</Text>
            <AntDesign name="caretright" size={24} color={color.black} style={{ opacity: 0.8 }} />
        </View>
    )
    const handleLogout = () => {
        dispatch(signOut())
    };

    return (
        <ButtonOriginal
            buttonStyle={styles.profileButtons}
            textStyle={{ flex: 1, color: color.black }}
            title={<ButtonTitleComponent/>}
            onPress={handleLogout}
        /> 
    )
}
const styles = StyleSheet.create({
    header: {
        fontSize: 26, 
        fontWeight: "bold",
    },
    profileButtons: { 
        marginTop: 10, 
        height: 60,
        backgroundColor:"transparent"
    },
     buttonTitleView: {
        width:"100%",
        flexDirection:"row", 
        justifyContent: "space-between",
        alignItems:"center", 
    }
})
export default ExitButton;