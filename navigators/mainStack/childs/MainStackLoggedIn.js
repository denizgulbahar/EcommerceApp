import React from 'react';
import { StatusBar, Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageButton from '../../../components/buttons/languageButton'; 
import ClientBottomNavigator from '../../bottomNavigator/ClientBottomNavigator'; 
import MyAccountScreen from '../../../screens/clientScreens/myAccountScreens/MyAccountScreen';
import SpecificCategoryScreen from '../../../screens/clientScreens/homeScreens/SpecificCategoryScreen';
import ProductDetailScreen from '../../../screens/clientScreens/homeScreens/ProductDetailScreen'; 
import OtherCategoriesScreen from '../../../screens/clientScreens/homeScreens/OtherCategoriesScreen';
import FavouriteScreen from '../../../screens/clientScreens/FavouriteScreen'; 
import PersonalInformationScreen from '../../../screens/clientScreens/myAccountScreens/PersonalInformationScreen';
import PreviousOrderScreen from '../../../screens/clientScreens/myAccountScreens/PreviousOrderScreen';

const Stack = createStackNavigator();

function MainStackLoggedIn() {
  const width = Dimensions.get('window').width;

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="client"
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
        <Stack.Screen name="client" component={ClientBottomNavigator} />
        <Stack.Screen name="my-account" component={MyAccountScreen} />
        <Stack.Screen name="personal-informations" component={PersonalInformationScreen} />
        <Stack.Screen name="previous-orders" component={PreviousOrderScreen} /> 
        <Stack.Screen name="home" component={SpecificCategoryScreen} />
        <Stack.Screen name="details" component={ProductDetailScreen} />
        <Stack.Screen name="other-categories" component={OtherCategoriesScreen} />
        <Stack.Screen name="favourites" component={FavouriteScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MainStackLoggedIn;
