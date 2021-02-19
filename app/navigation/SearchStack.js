import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchedArticlesScreen from '../screens/SearchedArticlesScreen';
import SearchScreen from '../screens/SearchScreen';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="SearchedArticles"
        component={SearchedArticlesScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
