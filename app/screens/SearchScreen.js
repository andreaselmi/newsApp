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
import ListingsArticles from '../components/ListingsArticles';
import FormField from '../components/form/FormField';
import EmptyScreenPlaceholder from '../components/EmptyScreenPlaceholder';

let validationSchema = yup.object().shape({
  search: yup
    .string()
    .required('Non puoi effettuare la ricerca se il campo è vuoto'),
});

const SearchScreen = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  const newsStore = useSelector((state) => state.news);

  const {searchedArticles, isLoading, error} = newsStore;
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
            onSubmit={(values) => {
              dispatch(searchNews(values.search));
            }}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, values, resetForm}) => (
              <FormField
                clearTextButton
                clearTextFn={resetForm}
                iconColor={colors.placeholder}
                iconName="search"
                mode="flat"
                name="search"
                placeholder="Search"
                onChangeText={handleChange('search')}
                onSubmitEditing={handleSubmit}
                style={styles.FormField}
                value={values.search}
              />
            )}
          </Formik>

          {!searchedArticles && !isLoading && (
            <EmptyScreenPlaceholder
              text="Cerca le notizie da tutto il mondo"
              colors={colors}
            />
          )}

          <View style={styles.resultsContainer}>
            {Array.isArray(searchedArticles) &&
              searchedArticles.length === 0 && <Text>Nessun Risultato</Text>}
            {Array.isArray(searchedArticles) &&
              searchedArticles.length >= 1 && (
                <Text
                  style={[styles.sectionsTitle, {color: colors.placeholder}]}>
                  Risultati
                </Text>
              )}

            <ListingsArticles
              data={searchedArticles}
              error={error}
              keyboardDismissMode="on-drag"
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
  FormField: {
    height: 50,
  },
  resultsContainer: {
    marginTop: 10,
    flex: 1,
  },
  sectionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
