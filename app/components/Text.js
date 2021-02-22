import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const AppText = ({children, style, numberOfLines}) => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, {color: colors.textColor}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
