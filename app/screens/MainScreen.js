import React from 'react';
import {View} from 'react-native';

import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import Text from '../components/Text';
import AppButton from '../components/AppButton';

const MainScreen = ({navigation}) => {
  return (
    <Screen>
      <Text>MainScreen</Text>
      <AppButton text="prova" onPress={() => navigation.navigate('Article')} />
    </Screen>
  );
};

export default MainScreen;
