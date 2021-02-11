import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';

//components
import {Avatar} from 'react-native-paper';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
//config
import defaultStyle from '../config/styles';

const RegisterScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyle.colors.light}}>
      <View style={styles.container}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={[defaultStyle.text, styles.pageTitle]}>Sign Up</Text>
        </View>
        <View style={styles.containerAvatar}>
          <Avatar.Image size={150} source={require('../assets/topnews.png')} />
        </View>
        <View style={styles.containerForm}>
          <Formik
            initialValues={{fullname: '', email: '', password: ''}}
            onSubmit={(values) => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <AppTextInput
                  label="Full Name"
                  placeholder="Mario Rossi"
                  mode="flat"
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                />
                <AppTextInput
                  label="email"
                  placeholder="username@email.com"
                  mode="flat"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <AppTextInput
                  label="password"
                  placeholder="••••••••"
                  mode="flat"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <AppButton
                  contentStyle={{height: 50}}
                  labelStyle={{letterSpacing: 6}}
                  text="Register"
                  mode="contained"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerAvatar: {
    margin: 50,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  containerForm: {
    width: '100%',
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
