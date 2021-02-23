import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import LottieView from 'lottie-react-native';

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
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);
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
          {error && (
            <View style={styles.errorContainer}>
              <Text>Impossibile caricare le notizie</Text>
              <Button title="Riprova" onPress={onRefresh} />
            </View>
          )}
          {isLoading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <LottieView
                style={{width: 200, height: 200}}
                source={require('../assets/animations/loader.json')}
                autoPlay
                loop={isLoading}
              />
            </View>
          ) : (
            <ListingsArticles data={searchedArticles} onPress={openWebView} />
          )}
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
