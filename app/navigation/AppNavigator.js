import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import colors from '../config/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MainStackScreen from './MainStack';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TopNews') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Cerca') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: colors.dark,
        inactiveBackgroundColor: colors.dark,
        style: {
          backgroundColor: colors.dark,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="TopNews" component={MainStackScreen} />
      <Tab.Screen name="Cerca" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
