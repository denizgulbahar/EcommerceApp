import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../../screens/clientScreens/myAccountScreens/MyAccountScreen';
import PersonalInformationScreen from '../../screens/clientScreens/myAccountScreens/PersonalInformationScreen';
import PreviousOrderScreen from '../../screens/clientScreens/myAccountScreens/PreviousOrderScreen';


const Stack = createStackNavigator();

function MyAccountStack() {

  return (
        <Stack.Navigator
            initialRouteName="my-account"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="my-account" component={MyAccountScreen} />
            <Stack.Screen name="personal-informations" component={PersonalInformationScreen} />
            <Stack.Screen name="previous-orders" component={PreviousOrderScreen} /> 
        </Stack.Navigator>
  );
}

export default MyAccountStack;
