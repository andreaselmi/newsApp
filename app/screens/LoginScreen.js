import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

//components
import Screen from '../components/Screen';
import FormField from '../components/form/FormField';
import Button from '../components/Button';
import Text from '../components/Text';
import {useSelector} from 'react-redux';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

const LoginScreen = () => {
  const colors = useSelector((state) => state.config.colors);

  const login = async (values) => {
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={{backgroundColor: colors.backgroundScreen}}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.pageTitle}>Accedi</Text>
          <Text>Accedi per visualizzare i tuoi articoli salvati</Text>
        </View>
        <View style={styles.containerForm}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={login}
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
                  autoCapitalize="none"
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
                  autoCapitalize="none"
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
                <Button
                  labelStyle={{letterSpacing: 6}}
                  onPress={handleSubmit}
                  name="Log In"
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
  containerHeader: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
