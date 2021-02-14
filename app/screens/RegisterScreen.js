import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

//components
import {Avatar} from 'react-native-paper';
import Screen from '../components/Screen';
import FormField from '../components/form/FormField';
import Button from '../components/Button';
//config
import defaultStyle from '../config/styles';
import colors from '../config/colors';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
  fullname: yup.string().required(),
});

const RegisterScreen = () => {
  return (
    <Screen style={{backgroundColor: defaultStyle.colors.medium}}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={[defaultStyle.text, styles.pageTitle]}>Registrati</Text>
          <Text style={styles.pageSubtitle}>
            Crea un account per avere la possibilità di salvare gli articoli e
            leggerli ovunque, anche offline
          </Text>
        </View>
        {/* <View style={styles.containerAvatar}>
          <Avatar.Image size={150} source={require('../assets/topnews.png')} />
        </View> */}
        <View style={styles.containerForm}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  name="email"
                  label="email"
                  placeholder="username@email.com"
                  mode="flat"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <FormField
                  name="password"
                  label="password"
                  placeholder="••••••••"
                  mode="flat"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
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
    color: colors.white,
  },
  pageSubtitle: {
    color: colors.white,
  },
});

export default RegisterScreen;
