import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import Loading from '../../components/loading/loading';
import ButtonOriginal from '../../components/buttons/buttonOriginal';
import InputOriginal from '../../components/input/inputOriginal';
import { Header } from '../../components/header/header';
import { ScreenWrapper } from '../../components/wrappers/screenWrapper';
import LoginButton from '../../redux/feature/auth/loginButton';

const LoginScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false); 
    const [email, setEmail] = useState("deniz.gulbahar@gmail.com");
    const [password, setPassword] = useState('Ecommerce123');

    const handleForgotPassword = () => {
        navigation.navigate('password');
    };
    const updateLoading = (state) => {
        setIsLoading(state);
    }
    return (
        <ScreenWrapper>
            {isLoading ? (
                <Loading/> 
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
                        value={email}
                        onChangeText={setEmail}
                    />
                    <InputOriginal
                        icon="email"
                        label="Password"
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
                    <LoginButton 
                        email={email}
                        password={password}
                        updateLoading={updateLoading} 
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