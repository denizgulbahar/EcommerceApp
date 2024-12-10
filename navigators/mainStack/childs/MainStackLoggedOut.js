import React from 'react';
import { StatusBar, Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageButton from '../../../components/buttons/languageButton'; 
import LoginScreen from '../../../screens/authScreens/LoginScreen'; 
import ForgotPasswordScreen from '../../../screens/authScreens/ForgotPasswordScreen'; 

const Stack = createStackNavigator();

function MainStackLoggedOut() {
  const width = Dimensions.get('window').width;

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: width / 2 - 115,
              }}
            >
              <LanguageButton />
            </View>
          ),
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MainStackLoggedOut;
