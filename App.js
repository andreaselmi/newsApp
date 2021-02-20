import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';

//config

import Routes from './app/navigation/Routes';
import configureStore from './app/store/configureStore';
import UiProvider from './app/config/PaperProvider';

const App = () => {
  const store = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <UiProvider>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </UiProvider>
    </Provider>
  );
};

export default App;
