import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyScreenPlaceholder = ({colors, style, text}) => {
  return (
    <View style={[styles.textContainer, style]}>
      <Text style={[styles.text, {color: colors.placeholder}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmptyScreenPlaceholder;
