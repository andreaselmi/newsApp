import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import Screen from '../components/Screen';
import Button from '../components/Button';
import AccountItem from '../components/AccountItem';

//config
import {toggleDarkMode} from '../store/config';

const AccountScreen = ({navigation}) => {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const user = useSelector((state) => state.auth.user);
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const dispatch = useDispatch();

  const logout = () => {
    auth().signOut();
  };

  const darkMode = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('darkMode', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const darkModeSwitcher = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    darkMode(isDarkMode);
  }, [isDarkMode]);

  const checkSavedArticles = () => {
    if (savedArticles.length === 0) {
      return 'Non hai articoli da leggere';
    } else if (savedArticles.length === 1) {
      return 'Hai 1 articolo da leggere';
    } else {
      return `Hai ${savedArticles.length} articoli da leggere`;
    }
  };

  return (
    <Screen>
      <AccountItem text={user ? user.email : 'Account'} />
      <AccountItem
        onPress={() => navigation.navigate('SavedArticles')}
        text={checkSavedArticles()}
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
