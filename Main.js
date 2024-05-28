import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StatusBar, View } from 'react-native';
import LoginScreen from './screens/authScreens/LoginScreen';
import ForgotPasswordScreen from './screens/authScreens/ForgotPasswordScreen';
import LanguageButton from './components/buttons/languageButton';
import MyAccountScreen from './screens/clientScreens/myAccountScreens/MyAccountScreen';
import PersonalInformationScreen from './screens/clientScreens/myAccountScreens/PersonalInformationScreen';
import PreviousOrderScreen from './screens/clientScreens/myAccountScreens/PreviousOrderScreen';
import SpecificCategoryScreen from './screens/clientScreens/homeScreens/SpecificCategoryScreen';
import ProductDetailScreen from './screens/clientScreens/homeScreens/ProductDetailScreen';
import ShoppingCartScreen from './screens/clientScreens/ShoppingCartScreen';
import OtherCategoriesScreen from './screens/clientScreens/homeScreens/OtherCategoriesScreen';
const Stack = createStackNavigator();
export default function Main() {
    const width = Dimensions.get('window').width;
    return (
        <>
            <StatusBar style="auto" />
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerShown: false,
                    headerRight: () => (
                        <View 
                            style={{
                                flexDirection: "row",  
                                alignItems: "center", 
                                justifyContent: "center", 
                                marginRight: width / 2 - 115
                            }}
                        >
                            <LanguageButton />
                        </View>
                    )
                }}
            >
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="password"
                    component={ForgotPasswordScreen}
                />
                <Stack.Screen
                    name="my-account"
                    component={MyAccountScreen}
                />
                <Stack.Screen
                    name="personal-informations"
                    component={PersonalInformationScreen}
                />
                <Stack.Screen
                    name="previous-orders"
                    component={PreviousOrderScreen}
                /> 
                <Stack.Screen
                    name="home"
                    component={SpecificCategoryScreen}
                /> 
                <Stack.Screen
                    name="details"
                    component={ProductDetailScreen}
                /> 
                <Stack.Screen
                    name="cart"
                    component={ShoppingCartScreen}
                /> 
                <Stack.Screen
                    name="other-categories"
                    component={OtherCategoriesScreen}
                /> 
                {/* <Stack.Screen
                    name="client"
                    component={ClientBottomNavigator}
                /> */}
            </Stack.Navigator >
        </>
    );
}
