import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const AppTextInput = ({onChangeText, onBlur, value, style, ...restProps}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default AppTextInput;
