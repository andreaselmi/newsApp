import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import FormField from '../containers/FormField';
import Button from '../components/Button';
import Text from '../components/Text';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const colors = useSelector((state) => state.config.colors);

  const register = async (values) => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Questo indirizzo email è già in uso!');
      } else if (error.code === 'auth/invalid-email') {
        setError('Indirizzo email non valido!');
      } else setError('Impossibile completare la registrazione');
      setLoading(false);
    }
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.pageTitle}>Registrati</Text>
            <Text>Crea un account per utilizzare l'app</Text>
          </View>
          <View style={styles.containerForm}>
            {error && <Text style={{color: colors.danger}}>{error}</Text>}
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
                    placeholder="email@address.com"
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
                    mode="flat"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                    value={values.password}
                  />
                  <Button
                    disabled={loading}
                    name="Register"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
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

export default RegisterScreen;
