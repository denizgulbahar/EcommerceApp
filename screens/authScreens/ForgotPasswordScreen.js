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
        if(password && confirmPassword){
            if(password === confirmPassword){
                Alert.alert("şifreniz yenilenmiştir.")
            } else {
                Alert.alert("şifreler uyuşmuyor, lütfen tekrar deneyin!")
            }
        } else {
            Alert.alert("Yeni şifreyi giriniz.")
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={{ height: 400 }}>
                <View style={{ alignSelf: "flex-start", marginBottom: 30 }}>
                    <Header text="Şifreni Değiştir" />
                </View>
                <InputOriginal 
                    placeholder={t("password")}
                    keyboard="password" 
                    value={password} 
                    onChangeText={setPassword} 
                />
                <InputOriginal 
                    placeholder={t("confirmPassword")}
                    keyboard="password" 
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                />
                <ButtonOriginal 
                    buttonStyle={{ marginHorizontal:5, marginTop: 20 }} 
                    title={t("ResetPassword")} 
                    onPress={handleResetPassword} 
                />
                <ButtonOriginal 
                    buttonStyle={{ marginTop: 20, width: 200, alignSelf: "center" }} 
                    title={t("Ana Ekrana Dön")} 
                    onPress={ () => navigation.navigate("login")} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        backgroundColor:color.mainColor,
    },
});

export default ForgotPasswordScreen;