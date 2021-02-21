import React, {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import Button from '../components/Button';

//config
import {toggleDarkMode} from '../store/config';

const AccountScreen = () => {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const colors = useSelector((state) => state.config.colors);
  const dispatch = useDispatch();

  const logout = () => {
    auth().signOut();
  };

  const toggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Screen>
      <View
        style={[
          styles.accountContainer,
          {backgroundColor: colors.backgroundCardColor},
        ]}>
        <Text>andreaselmi90@gmail.com</Text>
      </View>
      <View
        style={[
          styles.accountContainer,
          {backgroundColor: colors.backgroundCardColor},
        ]}>
        <Text>Hai ancora 2 articoli da leggere</Text>
        <IonIcon name="chevron-forward" size={24} color={colors.iconColor} />
      </View>
      <View
        style={[
          styles.accountContainer,
          {backgroundColor: colors.backgroundCardColor},
        ]}>
        <Text>Dark Mode</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle}
          value={isDarkMode}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          name="Log Out"
          labelStyle={{letterSpacing: 6}}
          onPress={logout}
        />
      </View>
    </Screen>
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
  buttonContainer: {
    marginBottom: 20,
    marginTop: 'auto',
    paddingHorizontal: 20,
  },
});

export default AccountScreen;
