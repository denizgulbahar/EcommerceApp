import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import { signIn } from "../../store/slices/authSlice"
import { color } from "../../../styles/color";
import { useTranslation } from "react-i18next";
const LoginButton = ({ email, password, title, updateLoading }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const mockCredentialsValid = (email, password) => {
        return email === "deniz.gulbahar@gmail.com" && password === "Ecommerce123";
    };
    const handleLogin = async () => {

        const user = {
            name: "deniz",
            surname: "gülbahar",
            password: 'Ecommerce123',
            email: 'deniz.gulbahar@gmail.com',
            telNo: '0552 481 18 16'
        }
        if (mockCredentialsValid(email, password)) {
            updateLoading(true);
            try {
                dispatch(signIn(user))
            } catch (error) {
                console.error(t("loginDispatchFail"), error);
                Alert.alert(t("loginDispatchFail"));
            } finally {
                updateLoading(false);
            }
        } else {
            Alert.alert(t("loginGeneralFail"));
        }
    };

    return (
        <ButtonOriginal 
            title={title}
            onPress={handleLogin} 
            buttonStyle={{ marginTop: 20, backgroundColor: color.white }} 
        />
    )
}
export default LoginButton;