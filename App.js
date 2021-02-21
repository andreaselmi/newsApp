import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import StatusBar from './app/components/StatusBar';

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
      <StatusBar />
      <UiProvider>
        <Routes />
      </UiProvider>
    </Provider>
  );
};

export default App;
