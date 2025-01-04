import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { color } from '../../styles/color'
import HomeTopNavigator from './homeTopNavigator/HomeTopNavigator';
import FavouriteScreen from '../../screens/clientScreens/FavouriteScreen';
import ShoppingBasketScreen from '../../screens/clientScreens/ShoppingCartScreen';
import MyAccountStack from './MyAccountStack';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();
const ClientBottomNavigator = () => {
    const { t } = useTranslation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: styles.tabContainer,
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        if (route.name === 'home') {
                            iconName = 'home';
                        } else if (route.name === 'favourites') {
                            iconName = 'heart';
                        } else if (route.name === 'my-cart') {
                            iconName = 'shopping-basket';
                        } else if (route.name === 'account-stack') {
                            iconName = 'user-circle-o';
                        }
                        return (
                            <FontAwesome
                                name={iconName}
                                size={23}
                                color={color}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen name="home" options={{ tabBarLabel: t("home"), unmountOnBlur: true }} component={HomeTopNavigator} />
                <Tab.Screen name="favourites" options={{ tabBarLabel: t("myFavourites"), unmountOnBlur: true }} component={FavouriteScreen} />
                <Tab.Screen name="my-cart" options={{ tabBarLabel: t("myCart"), unmountOnBlur: true }} component={ShoppingBasketScreen} />
                <Tab.Screen name="account-stack" options={{ tabBarLabel: t("myAccount"), unmountOnBlur: true  }} component={MyAccountStack} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    tabContainer: {
        height: 60,
        backgroundColor: color.softerMainColor,
        borderWidth: 0,
        borderTopWidth: 0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 2,
        paddingBottom: 2,
    },
    tabBarLabelStyle: {
        fontSize: 15,
    }
});



export default ClientBottomNavigator;