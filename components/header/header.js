import { View, Text } from "react-native"
import { generalStyles } from "../../styles/generalStyles";
export const Header = ({ text, viewStyle }) => {
    return(
            <View style={[{ alignItems: "flex-start", margin: 7, marginBottom: 10}, viewStyle]}>
                <Text style={generalStyles.header}>
                    {text}
                </Text>
            </View>
    )
}