import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/config/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
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
