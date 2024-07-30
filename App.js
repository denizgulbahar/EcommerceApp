import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { NavigationContainer } from '@react-navigation/native';
import Theme from './theme';
import MainStack from './navigators/MainStack';

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer linking={{ enabled: true }} >
        <UserProvider>
          <CartProvider>
            <MainStack />
          </CartProvider>
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

