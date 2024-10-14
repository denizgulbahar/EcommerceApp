import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import { NativeWindProvider } from 'nativewind';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer linking={{ enabled: true }}>
        {/* User ve Card Providerlar Burada Olacak Store Olarak */}
        <Provider store={}>
          <NativeWindProvider>
            <UserProvider>
                <CartProvider>
                  <MainStack />
                </CartProvider>
              </UserProvider>
          </NativeWindProvider>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

