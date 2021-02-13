import React from 'react';

import {TextInput} from 'react-native-paper';

const AppTextInput = ({iconName, iconColor, ...restProps}) => {
  return (
    <TextInput
      {...restProps}
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

export default AppTextInput;
