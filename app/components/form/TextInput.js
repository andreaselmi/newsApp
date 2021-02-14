import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const AppTextInput = ({iconName, iconColor, ...restProps}) => {
  return (
    <TextInput
      {...restProps}
      style={styles.textInput}
      left={
        iconName ? (
          <TextInput.Icon
            name={iconName} // where <Icon /> is any component from vector-icons or anything else
            onPress={() => {}}
            color={iconColor}
          />
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
  },
});

export default AppTextInput;
