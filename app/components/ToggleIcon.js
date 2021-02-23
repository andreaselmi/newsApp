import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

const ToggleIcon = ({active, color, inactive, isActive, onPress, style}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style}>
        <IonIcons color={color} name={isActive ? active : inactive} size={36} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ToggleIcon;
