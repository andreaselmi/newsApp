import React from 'react';
import {View} from 'react-native';

import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import Text from '../components/Text';

const MainScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyles.colors.medium}}>
      <Text>MainScreen</Text>
    </Screen>
  );
};

export default MainScreen;
