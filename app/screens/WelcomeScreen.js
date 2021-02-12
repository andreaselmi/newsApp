import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import AppButton from '../components/AppButton';

import HeaderImage from '../components/HeaderImage';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/welcomeScreenBg.jpg')}
      style={styles.bgImage}
      blurRadius={Platform.OS === 'android' ? 5 : 20}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <HeaderImage
            source={require('../assets/topnews.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            //   loading={true}
            text="Log In"
            contentStyle={{height: 50}}
            labelStyle={{letterSpacing: 6}}
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Login')}>
            Log in
          </AppButton>
          <AppButton
            //   loading={true}
            style={styles.button}
            text="Register"
            contentStyle={{height: 50}}
            labelStyle={{letterSpacing: 6}}
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Register')}>
            Register
          </AppButton>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {marginTop: 20},
  buttonsContainer: {
    width: '100%',
    marginBottom: '25%',
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  imageContainer: {flex: 1},
});

export default WelcomeScreen;
