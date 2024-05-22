import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { color } from '../styles/color'
import HomeTopNavigator from './HomeTopNavigator';
import FavouriteScreen from '../screens/clientScreens/FavouriteScreen';
import ShoppingBasketScreen from '../screens/clientScreens/ShoppingBasketScreen';
import MyAccountScreen from '../screens/clientScreens/MyAccountScreen';

const Tab = createBottomTabNavigator();
const ClientBottomNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName='home'
                sceneContainerStyle={styles.sceneContainerStyle}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    activeTabBarItemStyle: styles.activeTabBarItemStyle,
                    inactiveTabBarItemStyle: styles.inactiveTabBarItemStyle,
                    tabBarStyle: styles.tabContainer,
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        if (route.name === 'home') {
                            iconName = 'home';
                        } else if (route.name === 'favourites') {
                            iconName = 'heart';
                        } else if (route.name === 'my-basket') {
                            iconName = 'shopping-basket';
                        } else if (route.name === 'my-account') {
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
                <Tab.Screen name="home" options={{ tabBarLabel: "AnaSayfa", unmountOnBlur: true }} component={HomeTopNavigator} />
                <Tab.Screen name="favourites" options={{ tabBarLabel: "Favorilerim", unmountOnBlur: true }} component={FavouriteScreen} />
                <Tab.Screen name="my-basket" options={{ tabBarLabel: "Sepetim", unmountOnBlur: true }} component={ShoppingBasketScreen} />
                <Tab.Screen name="my-account" options={{ tabBarLabel: "Hesabım", unmountOnBlur: true  }} component={MyAccountScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    tabIconContainer: {
    },
    tabBarItem: {
    },
    activeTabBarItemStyle: {

    },
    inactiveTabBarItemStyle: {

    },
    tabContainer: {
        height: 49,
        backgroundColor: color.mainColor,
        borderWidth: 0,
        borderColor: color.mainColor,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        borderTopWidth: 0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 2,
        paddingBottom: 2,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.45,
    },
    sceneContainerStyle: {

    }
});


export default ClientBottomNavigator;