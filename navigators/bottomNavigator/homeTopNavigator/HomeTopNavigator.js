import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { color } from '../../../styles/color';
import SpecificCategoryScreen from '../../../screens/clientScreens/homeScreens/SpecificCategoryScreen';
import dataTrending from "../../../data/topTabData/dataTrending.json";
import dataMen from "../../../data/topTabData/dataMen.json";
import dataWomen from "../../../data/topTabData/dataWomen.json";

const Tab = createMaterialTopTabNavigator()
const HomeTopNavigator = ({ route }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                    tabBarStyle: {
                        backgroundColor: color.secondColor,
                        borderRadius: 20,
                        position: 'relative',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 60,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: color.white,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.white,
                        height: 3,
                        borderRadius: 10,
                        flex: 1,
                    },
                    tabBarActiveTintColor: color.white,
                    tabBarInactiveTintColor: color.white,
                }}
            >   
                <Tab.Screen
                    name="trends"
                    options={{ tabBarLabel: 'Trendler' }}
                    component={SpecificCategoryScreen}
                    initialParams={{ data: dataTrending }}
                />
                <Tab.Screen
                    name="man"
                    options={{ tabBarLabel: 'Erkek' }}
                    component={SpecificCategoryScreen}
                    initialParams={{ data: dataMen }}
                />
                <Tab.Screen
                    name="woman"
                    options={{ tabBarLabel: 'Kadın' }}
                    component={SpecificCategoryScreen}
                    initialParams={{ data: dataWomen }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
export default HomeTopNavigator;