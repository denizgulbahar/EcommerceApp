import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ButtonOriginal from '../../components/buttons/buttonOriginal';
import InputOriginal from '../../components/input/inputOriginal';
import { Header } from '../../components/header/header';
import { ScreenWrapper } from '../../components/wrappers/screenWrapper';
import LoginButton from '../../redux/feature/auth/loginButton';
import { useTranslation } from 'react-i18next';
import withLoadingLogin from '../../utilities/withLoadingLogin';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("deniz.gulbahar@gmail.com");
    const [password, setPassword] = useState('Ecommerce123');
    const { t } = useTranslation()
    const handleForgotPassword = () => {
        navigation.navigate('password');
    };
    const LoginComponents = ({ updateLoading }) => (
    <>
        <Image
            source={require('../../assets/logo/logo.png')}
            style={[styles.logo]}
            resizeMode="contain"
        />      
        <Header text={t("welcomeApp")} />
        <InputOriginal
            icon="email"
            rightIcon="checkbox-marked-circle"
            placeholder={t("email")}
            value={email}
            onChangeText={setEmail}
        />
        <InputOriginal
            icon="lock"
            placeholder={t("password")}
            kind="password"
            keyboard="password"
            secureText="true"
            value={password}
            onChangeText={setPassword}
        />
        <View style={{ alignItems: "flex-end" }}>
            <ButtonOriginal
                title={t("forgotPassword")}
                onPress={handleForgotPassword}
            />
        </View>
            <LoginButton 
                email={email}
                password={password}
                title={t("login")}
                updateLoading={updateLoading} 
            />
    </> )
    // In real API call, show loading component while waiting for the response
    const LoginWithLoading = withLoadingLogin(LoginComponents)
    return (
        <ScreenWrapper>
           <LoginWithLoading />
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    logo: {
        opacity: 0.8,
        height: 160,
        width: 320,
        marginVertical: 30,
        alignSelf: "center",
    },
    singleButtonView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        paddingHorizontal: 20,
        width: "100%"
    }

});


export default LoginScreen;