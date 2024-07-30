import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StatusBar, View } from 'react-native';
import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPasswordScreen';
import LanguageButton from '../components/buttons/languageButton';
import MyAccountScreen from '../screens/clientScreens/myAccountScreens/MyAccountScreen';
import PersonalInformationScreen from '../screens/clientScreens/myAccountScreens/PersonalInformationScreen';
import PreviousOrderScreen from '../screens/clientScreens/myAccountScreens/PreviousOrderScreen';
import SpecificCategoryScreen from '../screens/clientScreens/homeScreens/SpecificCategoryScreen';
import ProductDetailScreen from '../screens/clientScreens/homeScreens/ProductDetailScreen';
import ShoppingCartScreen from '../screens/clientScreens/ShoppingCartScreen';
import OtherCategoriesScreen from '../screens/clientScreens/homeScreens/OtherCategoriesScreen';
import FavouriteScreen from '../screens/clientScreens/FavouriteScreen';
import { useUserContext } from '../contexts/UserContext';
import ClientBottomNavigator from './bottomNavigator/ClientBottomNavigator';

const Stack = createStackNavigator();
export default function MainStack() {
    const width = Dimensions.get('window').width;
    const { userState } = useUserContext();
    return (
        <>
            <StatusBar style="auto" />
            <Stack.Navigator
                initialRouteName="favourites"
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
                {(!userState.isLoggedIn) && (
                <>
                    <Stack.Screen
                        name="login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="password"
                        component={ForgotPasswordScreen}
                    />
                </>
                )}
                {(userState.isLoggedIn) && (
                <>
                    <Stack.Screen
                        name="client"
                        component={ClientBottomNavigator}
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
                    <Stack.Screen
                        name="favourites"
                        component={FavouriteScreen}
                    /> 
                </>
                )}
            </Stack.Navigator >
        </>
    );
}
