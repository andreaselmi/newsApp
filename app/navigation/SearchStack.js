import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {useSelector} from 'react-redux';
import SearchScreen from '../screens/SearchScreen';

const SearchStack = createStackNavigator();

const SearchStackNavigator = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{
          title: 'Top News',
          headerStyle: {
            backgroundColor: colors.backgroundCardColor,
          },
          headerTintColor: colors.textColor,
          headerBackTitle: 'Back',
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
