import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const AppTextInput = ({
  clearTextButton,
  clearTextFn = clear,
  iconName,
  iconColor,
  ...restProps
}) => {
  //default clear text function
  clear = () => {
    _textInput.setNativeProps({text: ''});
  };

  return (
    <TextInput
      left={iconName && <TextInput.Icon name={iconName} color={iconColor} />}
      ref={(component) => (_textInput = component)}
      right={
        clearTextButton && (
          <TextInput.Icon
            name="close"
            onPress={clearTextFn}
            color={iconColor}
          />
        )
      }
      style={styles.textInput}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
  },
});

export default AppTextInput;
