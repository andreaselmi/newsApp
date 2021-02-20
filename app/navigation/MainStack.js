import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import WebViewScreen from '../screens/WebViewScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator mode="modal">
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="WebView" component={WebViewScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
