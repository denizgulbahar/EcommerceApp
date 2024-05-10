import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StatusBar, View } from 'react-native';
import LoginScreen from './screens/authScreens/LoginScreen';
import ForgotPasswordScreen from './screens/authScreens/ForgotPasswordScreen';
import ClientBottomNavigator from './navigators/ClientBottomNavigator';
const Stack = createStackNavigator();
export default function Main() {
    const width = Dimensions.get('window').width;
    return (
        <>
            <StatusBar style="auto" />
            <Stack.Navigator
                initialRouteName={'login'}
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
                    name="client"
                    component={ClientBottomNavigator}
                />
            </Stack.Navigator >
        </>
    );
}
