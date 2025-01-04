import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageButton from '../../../redux/feature/auth/languageButton'; 
import LoginScreen from '../../../screens/authScreens/LoginScreen'; 
import ForgotPasswordScreen from '../../../screens/authScreens/ForgotPasswordScreen'; 

const Stack = createStackNavigator();

function MainStackLoggedOut() {

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FACD7' },
          headerTitle: () => {},
          headerRight: () => (
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
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
