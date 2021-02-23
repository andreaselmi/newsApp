import React from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Text from './Text';

const AccountItem = ({text, iconName, toggleValue, switcher}) => {
  const colors = useSelector((state) => state.config.colors);

  return (
    <View
      style={[
        styles.accountContainer,
        {backgroundColor: colors.backgroundCardColor},
      ]}>
      <Text>{text}</Text>
      {iconName && (
        <IonIcon name={iconName} size={24} color={colors.iconColor} />
      )}
      {switcher && (
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={switcher}
          value={toggleValue}
        />
      )}
    </View>
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
