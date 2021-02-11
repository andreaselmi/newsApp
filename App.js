import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Text>Hello world</Text>
      <Icon name="rocket" size={30} color="#900" />
    </PaperProvider>
  );
};

export default App;
