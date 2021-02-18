import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ArticleScreen from '../screens/ArticleScreen';
import colors from '../config/colors';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator mode="modal">
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.dark,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            color: colors.white,
          },
        }}
      />
      <MainStack.Screen
        options={{headerShown: false}}
        name="Article"
        component={ArticleScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
