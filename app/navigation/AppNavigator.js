import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

//Screens
import AccountScreen from '../screens/AccountScreen';

//stacknavigator
import MainStackNavigator from './MainStack';
import SearchStackNavigator from '../navigation/SearchStack';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const colors = useSelector((state) => state.config.colors);
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
        activeTintColor: colors.activeIconColor,
        inactiveTintColor: colors.inactiveIconColor,
        activeBackgroundColor: colors.backgroundCardColor,
        inactiveBackgroundColor: colors.backgroundCardColor,
        style: {
          backgroundColor: colors.backgroundCardColor,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="TopNews" component={MainStackNavigator} />
      <Tab.Screen name="Cerca" component={SearchStackNavigator} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
