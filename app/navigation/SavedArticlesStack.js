import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
import SavedArticlesScreen from '../screens/SavedArticlesScreen';
import WebViewScreen from '../screens/WebViewScreen';

const SavedArticlesStack = createStackNavigator();

const SavedArticlesStackNavigator = () => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <SavedArticlesStack.Navigator>
      <SavedArticlesStack.Screen
        name="SavedArticles"
        component={SavedArticlesScreen}
        options={{headerShown: false}}
      />
      <SavedArticlesStack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{
          title: 'WebView',
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.backgroundCardColor,
          },
          headerTintColor: colors.textColor,
          headerBackTitle: 'Back',
        }}
      />
    </SavedArticlesStack.Navigator>
  );
};

export default SavedArticlesStackNavigator;
