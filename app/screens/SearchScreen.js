import React from 'react';

import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import Text from '../components/Text';

const SearchScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyles.colors.medium}}>
      <Text>SearchScreen</Text>
    </Screen>
  );
};

export default SearchScreen;
