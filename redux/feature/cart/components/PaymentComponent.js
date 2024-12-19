import { View, Text, StyleSheet } from "react-native";
import { color } from "../../../../styles/color";
import { fonts } from "../../../../styles/fonts";
import { usePayment } from "../utilities/hooks/usePayment";

export const PaymentComponent = ({ cartItems, totalPrice }) => {
    // Custom Payment Hook
    const { cargoPrice, generalTotal } = usePayment({ cartItems, totalPrice })

    const paymentData = [
        { title: 'Toplam:', value: totalPrice },
        { title: 'Kargo:', value: cargoPrice },
        { title: 'Genel Toplam:', value: generalTotal },
    ];
return(
    <View style={styles.paymentContainer}>
        {paymentData.map((item, index) => (
        <View key={index} style={styles.rowContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.priceText}>{item.value}</Text>
        </View>
        )
        )}
        <View style={styles.checkout}>
            <Text style={styles.checkoutText}>Toplam</Text>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    paymentContainer: {
        marginHorizontal: 8,
        marginTop: 30,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    titleText: {
        fontSize: 18,
        color: color.darkGrey,
        fontWeight: "500",
    },
    priceText: {
        fontSize: 18,
        color: color.darkGrey,
        fontWeight: "600",
    },
    checkout: {
        borderRadius: 10,
        backgroundColor: color.cottonCandyRed,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        padding: 10,
    },
    checkoutText: {
        fontSize: 24,
        color: color.white,
        fontFamily: fonts.regular,
    },
  });