import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Main from './Main';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Theme from './theme';
export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer linking={{ enabled: true }} >
        <UserProvider>
          <CartProvider>
            <Main />
          </CartProvider>
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

