import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

//components
import Screen from '../components/Screen';
import FormField from '../components/form/FormField';
import Button from '../components/Button';
import {useSelector} from 'react-redux';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

const RegisterScreen = () => {
  const colors = useSelector((state) => state.config.colors);

  const register = async (values) => {
    try {
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }
  };

  // TODO aggiungere visualizzazione errori per utente già registrato o password debole
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.pageTitle}>Registrati</Text>
          <Text>
            Crea un account per avere la possibilità di salvare gli articoli e
            leggerli ovunque, anche offline
          </Text>
        </View>
        <View style={styles.containerForm}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={register}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="email"
                  label="email"
                  placeholder="username@email.com"
                  mode="flat"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="password"
                  label="password"
                  placeholder="••••••••"
                  mode="flat"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  value={values.password}
                />
                <Button name="Register" onPress={handleSubmit} />
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
  containerHeader: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
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
