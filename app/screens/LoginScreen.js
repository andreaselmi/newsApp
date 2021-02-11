import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';

//components
import HeaderImage from '../components/HeaderImage';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
//config
import defaultStyle from '../config/styles';

const LoginScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyle.colors.light}}>
      <View style={styles.container}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={[defaultStyle.text, styles.pageTitle]}>Sign In</Text>
        </View>
        <View>
          <HeaderImage source={require('../assets/topnews.png')} />
        </View>
        <View style={styles.containerForm}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
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
                  mode="flat"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <AppButton
                  contentStyle={{height: 50}}
                  labelStyle={{letterSpacing: 6}}
                  text="Log In"
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

export default LoginScreen;
