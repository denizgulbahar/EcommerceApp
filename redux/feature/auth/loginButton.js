import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import { signIn } from "../../store/slices/authSlice"

const LoginButton = ({ email, password, updateLoading }) => {

    const dispatch = useDispatch()
    const mockCredentialsValid = (email, password) => {
        return email === "deniz.gulbahar@gmail.com" && password === "Ecommerce123";
    };
    
    const handleLogin = async () => {

        if (mockCredentialsValid(email, password)) {
            updateLoading(true);
            try {
                dispatch(signIn())
            } catch (error) {
                console.error('Login başarısız. Lütfen tekrar deneyin.', error);
                Alert.alert('Login başarısız. Lütfen tekrar deneyin.');
            } finally {
                updateLoading(false);
            }
        } else {
            Alert.alert('Kullanıcı Adı yada Parola Hatalı');
        }
    };

    return (
        <ButtonOriginal 
            title="GİRİŞ"
            onPress={handleLogin} 
            buttonStyle={{ marginTop: 20 }} 
        />
    )
}
export default LoginButton;