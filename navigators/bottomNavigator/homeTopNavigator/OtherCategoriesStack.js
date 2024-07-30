import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const OtherCategoriesStack = () => {
    return (
        <Stack.Navigator 
          initialRouteName="main"  
          screenOptions={() => ({
            headerShown:false
          })}
        >
              <Stack.Screen
                key={route} 
                name={route}
                component={component}
              />
        </Stack.Navigator>
    );
};


export default OtherCategoriesStack;