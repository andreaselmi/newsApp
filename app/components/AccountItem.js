import React from 'react';
import {View, StyleSheet, Switch, TouchableWithoutFeedback} from 'react-native';
import {useSelector} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';

//components
import Text from './Text';

const AccountItem = ({text, iconName, onPress, toggleValue, switcher}) => {
  const colors = useSelector((state) => state.config.colors);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.accountContainer,
          {backgroundColor: colors.backgroundCardColor},
        ]}>
        <Text>{text}</Text>
        {iconName && (
          <IonIcons name={iconName} size={24} color={colors.iconColor} />
        )}
        {switcher && (
          <Switch
            ios_backgroundColor={colors.switchBackground}
            onValueChange={switcher}
            value={toggleValue}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
});

export default AccountItem;
