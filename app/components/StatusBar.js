import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

export default function AppStatusBar() {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      translucent
      backgroundColor="transparent"
    />
  );
}
