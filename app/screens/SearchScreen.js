import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';

//components
import Screen from '../components/Screen';
import TextInput from '../components/form/TextInput';
import Text from '../components/Text';

//store
import {searchNews} from '../store/news';
import ListingsArticles from '../components/ListingsArticles';

const SearchScreen = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  const searchedArticles = useSelector((state) => state.news.searchedArticles);
  const dispatch = useDispatch();

  //TODO aggiungere lunghezza max al titolo

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Formik
          initialValues={{search: ''}}
          onSubmit={(values, {resetForm}) => {
            dispatch(searchNews(values.search));
            resetForm();
          }}>
          {({handleChange, handleSubmit, values}) => (
            <TextInput
              iconColor={colors.placeholder}
              iconName="search"
              mode="flat"
              name="search"
              placeholder="search"
              onChangeText={handleChange('search')}
              value={values.search}
              onSubmitEditing={handleSubmit}
            />
          )}
        </Formik>

        <View style={styles.sectionsContainer}>
          {Array.isArray(searchedArticles) && searchedArticles.length === 0 && (
            <Text>Nessun Risultato</Text>
          )}
          {Array.isArray(searchedArticles) && searchedArticles.length >= 1 && (
            <Text style={[styles.sectionsTitle, {color: colors.placeholder}]}>
              Results
            </Text>
          )}

          <ListingsArticles data={searchedArticles} onPress={openWebView} />
        </View>
      </View>
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
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
