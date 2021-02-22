import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';

//components
import Screen from '../components/Screen';
import TextInput from '../components/form/TextInput';
import Text from '../components/Text';

//store
import {searchNews} from '../store/news';
import Card from '../components/Card';

const SearchScreen = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  const searchedArticles = useSelector((state) => state.news.searchedArticles);
  const dispatch = useDispatch();

  return (
    <Screen>
      <View style={styles.container}>
        <Formik
          initialValues={{search: ''}}
          onSubmit={(values) => dispatch(searchNews(values.search))}>
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
          <Text style={[styles.sectionsTitle, {color: colors.placeholder}]}>
            Results
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchedArticles}
            renderItem={({item}) => (
              <Card
                item={item}
                onPress={() => navigation.navigate('WebView', {url: item.url})}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
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
