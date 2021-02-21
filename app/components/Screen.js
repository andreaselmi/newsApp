import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const Screen = ({children, style}) => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <SafeAreaView
      style={[
        styles.screen,
        style,
        {backgroundColor: colors.backgroundScreen},
      ]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
