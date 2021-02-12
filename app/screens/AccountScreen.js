import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';

//config
import defaultStyles from '../config/styles';

const AccountScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyles.colors.dark}}>
      <View style={styles.accountContainer}>
        <Text style={defaultStyles.text}>andreaselmi90@gmail.com</Text>
      </View>
      <View style={styles.accountContainer}>
        <Text style={defaultStyles.text}>
          Hai ancora 2 articoli da leggere{' '}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          text="Log Out"
          contentStyle={{height: 50}}
          labelStyle={{letterSpacing: 6}}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: defaultStyles.colors.medium,
    justifyContent: 'center',
    marginTop: 20,
    height: 60,
    paddingHorizontal: 15,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 100,
  },
});

export default AccountScreen;
