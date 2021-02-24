import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import SavedArticlesStackNavigator from './SavedArticlesStack';
import {useSelector} from 'react-redux';

const AccountStack = createStackNavigator();

const AccountStackNavigator = () => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="SavedArticles"
        component={SavedArticlesStackNavigator}
        options={{
          title: 'Your Articles',
          headerStyle: {
            backgroundColor: colors.backgroundCardColor,
            shadowColor: 'transparent',
          },
          headerTintColor: colors.textColor,
          headerBackTitle: 'Account',
        }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountStackNavigator;
