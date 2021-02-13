import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import AuthStack from './app/navigation/AuthStack';
import theme from './app/config/theme';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider
        theme={theme}
        settings={{
          icon: (props) => <IonIcon {...props} />,
        }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
