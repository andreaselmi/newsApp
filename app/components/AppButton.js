import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const AppButton = ({style, text, mode = 'contained', ...restProps}) => {
  return (
    <Button mode={mode} style={[styles.button, style]} {...restProps}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
});

export default AppButton;
