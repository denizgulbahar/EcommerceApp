import { View, Text } from "react-native"
import { generalStyles } from "../../styles/generalStyles";
export const Header = ({ text }) => {
    return(
            <View style={{ alignItems: "flex-start", margin: 7, marginBottom: 10 }}>
                <Text style={generalStyles.header}>
                    {text}
                </Text>
            </View>
    )
}