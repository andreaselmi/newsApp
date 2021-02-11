import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

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
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <WelcomeScreen />
    </PaperProvider>
  );
};

export default App;
