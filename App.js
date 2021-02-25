import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import UiProvider from './app/config/PaperProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import StatusBar from './app/components/StatusBar';

//navigation
import Routes from './app/navigation/Routes';

//store
import configureStore from './app/store/configureStore';
import {setDarkMode} from './app/store/config';

const App = () => {
  const store = configureStore();

  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem('darkMode').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('darkMode', 'true');
      } else if (value === 'true') {
        store.dispatch(setDarkMode(true));
      } else {
        store.dispatch(setDarkMode(false));
      }
    });
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
