import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppButton from '../components/AppButton';

import HeaderImage from '../components/HeaderImage';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/welcomeScreenBg.jpg')}
      style={styles.bgImage}
      blurRadius={Platform.OS === 'android' ? 5 : 20}>
      <LinearGradient colors={['#ffffff00', 'black']} style={styles.container}>
        <View style={styles.imageContainer}>
          <HeaderImage
            source={require('../assets/topnews.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            text="Log In"
            contentStyle={{height: 50}}
            labelStyle={{letterSpacing: 6}}
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            Log in
          </AppButton>
          <AppButton
            style={styles.button}
            text="Register"
            contentStyle={{height: 50}}
            labelStyle={{letterSpacing: 6}}
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            Register
          </AppButton>
        </View>
      </LinearGradient>
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
