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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const colors = useSelector((state) => state.config.colors);

  const login = async (values) => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Utente non trovato');
      } else if (error.code === 'auth/wrong-password') {
        setError('Password non corretta');
      } else setError("Impossibile effettuare l'accesso");
      setLoading(false);
    }
  };

  return (
    <Screen style={{backgroundColor: colors.backgroundScreen}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.pageTitle}>Accedi</Text>
            <Text>
              Accedi da qualsiasi dispositivo per visualizzare i tuoi articoli
              da leggere
            </Text>
          </View>
          <View style={styles.containerForm}>
            {error && <Text style={{color: colors.danger}}>{error}</Text>}
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
                    iconColor={colors.placeholder}
                    label="email"
                    keyboardType="email-address"
                    mode="flat"
                    name="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="email@address.com"
                    value={values.email}
                  />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    error={errors.password && touched.password}
                    errorMessage={errors.password}
                    iconColor={colors.placeholder}
                    label="password"
                    mode="flat"
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                    value={values.password}
                  />
                  <Button
                    disabled={loading}
                    labelStyle={{letterSpacing: 6}}
                    onPress={handleSubmit}
                    name="Log In"
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
