import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import LoadingComponent from '../../components/LoadingComponent';
import ButtonOriginal from '../../components/buttons/buttonOriginal';
import InputOriginal from '../../components/input/inputOriginal';
import { Header } from '../../components/header/header';
import { ScreenWrapper } from '../../components/wrappers/screenWrapper';

const LoginScreen = ({ navigation }) => {
    const { userDispatch } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("deniz.gulbahar@gmail.com");
    const [password, setPassword] = useState('Ecommerce123');

    const isCredentialsValid = (username, password) => {
        return username === "deniz.gulbahar@gmail.com" && password === "Ecommerce123";
    };
    
    const handleLoginResponse = (response) => {
        const user = { ...response };
        if (user.data.token) {
            userDispatch({ type: 'LOG_IN', payload: user });
            navigation.navigate('client');
        } else {
            Alert.alert('Login failed. Please check your credentials.');
        }
    };
    const handleLogin = async () => {
        if (isCredentialsValid(username, password)) {
            setIsLoading(true);
            try {
                const loginResponse = await loginHandler({ user: username, password });
                handleLoginResponse(loginResponse);
            } catch (error) {
                console.error('Login başarısız, API isteği başarısız', error);
                Alert.alert('Login başarısız. Lütfen tekrar deneyin.');
            } finally {
                setIsLoading(false);
            }
        } else {
            Alert.alert('Kullanıcı Adı yada Parola Hatalı');
        }
    };
    
    const handleForgotPassword = () => {
        navigation.navigate('password');
    };
    return (
        <ScreenWrapper>
            {isLoading ? (
                <LoadingComponent /> 
            ) : (
                <>
                <Image
                        source={require('../../assets/logo/logo.png')}
                        style={[styles.logo]}
                        resizeMode="contain"
                    />      
                    <Header text="Welcome to Ecommerce APP" />
                    <InputOriginal
                        icon="email"
                        rightIcon="checkbox-marked-circle"
                        label="Email"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <InputOriginal
                        icon="email"
                        label="Şifre"
                        kind="password"
                        keyboard="password"
                        secureText="true"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <View style={{ alignItems: "flex-end" }}>
                        <ButtonOriginal
                            buttonStyle={{
                                backgroundColor: "transparent",
                                shadowOpacity: 0,
                            }}
                            title="Şifremi Unuttum?"
                            onPress={handleForgotPassword}
                        />
                    </View>
                    <ButtonOriginal 
                        title="GİRİŞ"
                        onPress={handleLogin} 
                        buttonStyle={{ marginTop: 20 }} 
                    />
                </>
            )}
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    logo: {
        opacity: 0.8,
        height: 160,
        width: 320,
        marginBottom: 30,
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