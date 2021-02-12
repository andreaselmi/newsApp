import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

//components
import HeaderImage from '../components/HeaderImage';
import Screen from '../components/Screen';
import FormField from '../components/form/FormField';
import AppButton from '../components/AppButton';
//config
import defaultStyle from '../config/styles';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

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
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              values,
            }) => (
              <View>
                <FormField
                  error={errors.email && touched.email}
                  errorMessage={errors.email}
                  label="email"
                  keyboardType="email-address"
                  mode="flat"
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="username@email.com"
                  value={values.email}
                />
                <FormField
                  autoCorrect={false}
                  error={errors.password && touched.password}
                  errorMessage={errors.password}
                  label="password"
                  mode="flat"
                  name="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  value={values.password}
                />
                <AppButton
                  contentStyle={{height: 50}}
                  labelStyle={{letterSpacing: 6}}
                  mode="contained"
                  onPress={handleSubmit}
                  text="Log In"
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
