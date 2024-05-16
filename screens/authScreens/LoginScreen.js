import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import LoadingComponent from '../../components/LoadingComponent';
import { color } from '../../styles/color';
import loginHandler from '../../API/AUTH/login';
import ButtonOriginal from '../../components/buttons/buttonOriginal';
import InputOriginal from '../../components/input/inputOriginal';
import { Seperator } from '../../components/seperator/seperator';
import { Header } from '../../components/header/header';
import { ScreenWrapper } from '../../components/wrappers/screenWrapper';

const LoginScreen = ({ navigation }) => {
    const width = Dimensions.get('window').width;
    const { userState, userDispatch } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("ecommerce@commerce.com");
    const [password, setPassword] = useState('password');
    const handleLogin = async () => {
        // Perform login logic here
        setIsLoading(true);
        const loginResponse = await loginHandler({ user: username, password: password });
        console.log(loginResponse)
        const user = { ...loginResponse };
        if (user.token) {
            setIsLoading(false);
            userDispatch({ type: 'LOG_IN', payload: user });
        }
        navigation.navigate("client")
    };
    const handleForgotPassword = () => {
        navigation.navigate('password');
    };
    return (
        isLoading ?
          <LoadingComponent /> 
          :
          <ScreenWrapper>
              <Image
                  source={require('../../assets/logo/logo.png')}
                  style={[styles.logo,{backgroundColor:color.black}]}
                  resizeMode="contain"
              />      
              <Header text="Welcome to Ecommerce APP" />
              <InputOriginal
                  icon="email"
                  rightIcon="checkbox-marked-circle"
                  kind="login"
                  label="Email"
                  value={username}
                  onChangeText={setUsername}
              />
              <InputOriginal
                  icon="email"
                  rightIcon="eye"
                  kind="login"
                  label="Şifre"
                  keyboard="password"
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
          </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 220,
        width: 310,
        marginBottom: 30,
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