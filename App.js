import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';

//config
import theme from './app/config/theme';

import Routes from './app/navigation/Routes';
import configureStore from './app/store/configureStore';
import {verifyAuth} from './app/store/auth';

const App = () => {
  const store = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
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
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
