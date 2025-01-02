import { View, Text } from "react-native"
import { generalStyles } from "../../styles/generalStyles";
export const Header = ({ text, viewStyle }) => {
    const baseStyle = { alignItems: "flex-start", marginHorizontal: 5, marginVertical: 10 }

    return(
        <View style={[baseStyle, viewStyle]}>
            <Text style={generalStyles.header}>
                {text}
            </Text>
        </View>
    )
}