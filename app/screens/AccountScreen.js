import React from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import Button from '../components/Button';
import AccountItem from '../components/AccountItem';

//config
import {toggleDarkMode} from '../store/config';

const AccountScreen = () => {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logout = () => {
    auth().signOut();
  };

  const darkModeSwitcher = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Screen>
      <AccountItem text={user ? user.email : 'Account'} />
      <AccountItem
        text="Hai ancora 2 articoli da leggere"
        iconName="chevron-forward"
      />
      <AccountItem
        text="Dark Mode"
        toggleValue={isDarkMode}
        switcher={darkModeSwitcher}
      />

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
  buttonContainer: {
    marginBottom: 20,
    marginTop: 'auto',
    paddingHorizontal: 20,
  },
});

export default AccountScreen;
