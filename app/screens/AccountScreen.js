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
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/auth';

const AccountScreen = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
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
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
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
    backgroundColor: '#313131',
    marginTop: 20,
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  darkModeContainer: {},
});

export default AccountScreen;
