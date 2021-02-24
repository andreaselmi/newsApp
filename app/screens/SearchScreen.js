import React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';

//store
import {searchNews} from '../store/news';
import ListingsArticles from '../containers/ListingsArticles';
import FormField from '../containers/FormField';

let validationSchema = yup.object().shape({
  search: yup
    .string()
    .required('Non puoi effettuare la ricerca se il campo è vuoto'),
});

const SearchScreen = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  const searchedArticles = useSelector((state) => state.news.searchedArticles);
  const error = useSelector((state) => state.news.searchNewsError);

  const dispatch = useDispatch();

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Formik
            initialValues={{search: ''}}
            onSubmit={(values, {resetForm}) => {
              dispatch(searchNews(values.search));
              resetForm();
            }}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, values}) => (
              <FormField
                iconColor={colors.placeholder}
                iconName="search"
                mode="flat"
                name="search"
                placeholder="Search"
                onChangeText={handleChange('search')}
                value={values.search}
                onSubmitEditing={handleSubmit}
              />
            )}
          </Formik>

          <View style={styles.sectionsContainer}>
            {Array.isArray(searchedArticles) &&
              searchedArticles.length === 0 && <Text>Nessun Risultato</Text>}
            {Array.isArray(searchedArticles) &&
              searchedArticles.length >= 1 && (
                <Text
                  style={[styles.sectionsTitle, {color: colors.placeholder}]}>
                  Risultati dal mondo
                </Text>
              )}

            <ListingsArticles
              data={searchedArticles}
              error={error}
              onPress={openWebView}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, flex: 1},
  sectionsContainer: {
    marginTop: 10,
    flex: 1,
  },
  sectionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
