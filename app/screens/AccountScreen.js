import React, {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import auth from '@react-native-firebase/auth';

import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import Button from '../components/Button';

//config
import defaultStyles from '../config/styles';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {activeDarkMode, activeLightMode} from '../store/config';

const AccountScreen = () => {
  const darkMode = useSelector((state) => state.config.darkMode);
  const dispatch = useDispatch();

  const logout = () => {
    auth().signOut();
  };

  const toggleDarkMode = () => {
    if (darkMode) dispatch(activeLightMode());
    else dispatch(activeDarkMode());
  };

  return (
    <Screen>
      <View style={styles.accountContainer}>
        <Text style={defaultStyles.text}>andreaselmi90@gmail.com</Text>
      </View>
      <View style={styles.accountContainer}>
        <Text style={defaultStyles.text}>Hai ancora 2 articoli da leggere</Text>
        <IonIcon name="chevron-forward" size={24} color={colors.light} />
      </View>
      <View style={[styles.accountContainer, styles.darkModeContainer]}>
        <Text style={defaultStyles.text}>Dark Mode</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkMode}
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
    backgroundColor: '#313131',
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
  darkModeContainer: {},
});

export default AccountScreen;
