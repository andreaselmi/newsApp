import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Screen from '../components/Screen';
import {Button} from 'react-native-paper';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/welcomeScreenBg.jpg')}
      style={styles.bgImage}
      blurRadius={Platform.OS === 'android' ? 5 : 20}>
      <Screen style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/TOPNEWS.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              //   loading={true}
              contentStyle={{height: 50}}
              labelStyle={styles.buttonText}
              style={styles.button}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Log in
            </Button>
            <Button
              //   loading={true}
              contentStyle={{height: 50}}
              labelStyle={styles.buttonText}
              style={styles.button}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Register
            </Button>
          </View>
        </View>
      </Screen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonsContainer: {
    width: '100%',
    flex: 1,
  },
  buttonText: {
    letterSpacing: 6,
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
  imageContainer: {
    flex: 2,
  },
});

export default WelcomeScreen;
