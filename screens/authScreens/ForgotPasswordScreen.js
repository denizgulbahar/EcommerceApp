import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { color } from '../../styles/color';
import InputOriginal from '../../components/input/inputOriginal';
import ButtonOriginal from '../../components/buttons/buttonOriginal';
import { useTranslation } from 'react-i18next';
import { Header } from '../../components/header/header';
const ForgotPasswordScreen = ({ navigation }) => {
    const {t} = useTranslation()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        if(password===confirmPassword){
            Alert.alert("şifreniz yenilenmiştir.")
        } else {
            Alert.alert("şifreler uyuşmuyor, lütfen tekrar deneyin!")
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={{ height:400}}>
                <View style={{ alignSelf:"flex-start" }}>
                    <Header text="SifreniDegistir" />
                </View>
                <InputOriginal 
                    label={t("password")}
                    keyboard="password" 
                    value={password} 
                    onChangeText={setPassword} 
                />
                <InputOriginal 
                    label={t("confirmPassword")}
                    keyboard="password" 
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                />
                <ButtonOriginal 
                    buttonStyle={{ marginTop: 20 }} 
                    title={t("Reset Password")} 
                    kind="signUp2" 
                    onPress={handleResetPassword} 
                />
                <ButtonOriginal 
                    buttonStyle={{ marginTop: 20, width: 200, alignSelf: "center" }} 
                    title={t("AnaEkranaDon")} 
                    onPress={ () => navigation.navigate("login")} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor:color.mainColor,
    },
});

export default ForgotPasswordScreen;