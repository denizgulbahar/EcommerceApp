import { View, Text, StyleSheet } from "react-native"
export const Header = ({ text, viewStyle }) => {

    return(
        <View style={[styles.viewStyle, viewStyle]}>
            <Text style={styles.header}>
                {text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: { 
        alignItems: "flex-start", 
        marginHorizontal: 5, 
        marginTop: 40,
    },
    header: {
        fontSize: 26, 
        fontWeight: "bold",
    },
})