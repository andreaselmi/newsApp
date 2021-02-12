import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

import AuthStack from './app/navigation/AuthStack';
import colors from './app/config/colors';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      accent: colors.secondary,
      background: colors.medium,
      text: colors.white,
      error: colors.danger,
      placeholder: colors.placeholder,
    },
  };
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <AuthStack />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
