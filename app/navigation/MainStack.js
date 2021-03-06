import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {useSelector} from 'react-redux';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
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
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
