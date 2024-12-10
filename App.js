import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/mainStack/MainStack';
import { NativeWindProvider } from 'nativewind';
import { Provider } from 'react-redux'
import store from './redux/store/store';

// NativeWind will be integrated to App without Error
export default function App() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}

