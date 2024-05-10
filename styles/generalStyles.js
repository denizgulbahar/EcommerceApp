import { color } from "./color";
export const generalStyles = {
    shadows: {
        borderWidth: 0,
        backgroundColor: color.white,
        borderColor: color.white,
        shadowColor: color.black,
        shadowOpacity: 0.15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        borderRadius: 12,
    },
    whiteRadiusContainer: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        backgroundColor: color.white,
        borderColor: color.white,
        shadowColor: color.black,
        shadowOpacity: 1,
    },
    screenHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        marginHorizontal: 10,
        color: color.black
    },
    calculationTextPrice: {
        color: color.black,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
        padding: 20,
    },
    calculationTextDescription: {
        color: color.black,
        fontSize: 18,
        fontWeight: "700",
        fontStyle: "italic",
        textAlign: "center",
        paddingHorizontal: 40,
        paddingVertical: 7,
        marginBottom: 15,
    },
};
