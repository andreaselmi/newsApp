import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

import AuthStack from './app/navigation/AuthStack';
import theme from './app/config/theme';
import {NavigationContainer} from '@react-navigation/native';
import AccountScreen from './app/screens/AccountScreen';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <AuthStack />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
