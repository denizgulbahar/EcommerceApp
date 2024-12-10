import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/mainStack/MainStack';
import { NativeWindProvider } from 'nativewind';
import { Provider } from 'react-redux'
import store from './redux/store/store';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer linking={{ enabled: true }}>
        {/* User ve Card Providerlar Burada Olacak Store Olarak */}
        <Provider store={store}>
          <NativeWindProvider>
              <MainStack />
          </NativeWindProvider>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

