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

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const store = configureStore();

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
