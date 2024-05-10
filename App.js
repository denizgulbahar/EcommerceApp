import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Main from './Main';
import { UserProvider } from './contexts/UserContext';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Theme from './theme';
export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer linking={{ enabled: true }} >
        <UserProvider>
          <Main />
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

