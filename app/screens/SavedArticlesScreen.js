import React from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';
import {clearSavedArticles, loadArticlesFromFirestore} from '../store/news';
import EmptyScreenPlaceholder from '../components/EmptyScreenPlaceholder';

const SavedArticlesScreen = ({navigation}) => {
  const newsStore = useSelector((state) => state.news);
  const user = useSelector((state) => state.user.currentUser);
  const colors = useSelector((state) => state.config.colors);
  const dispatch = useDispatch();

  const {savedArticles, isLoading} = newsStore;

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  const onRefresh = () => {
    dispatch(clearSavedArticles());
    dispatch(loadArticlesFromFirestore(user));
  };

  return (
    <Screen>
      <View style={styles.container}>
        {savedArticles.length === 0 && (
          <ScrollView
            style={{flex: 1}}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }>
            <EmptyScreenPlaceholder
              colors={colors}
              text="Non ci sono articoli salvati"
              style={{marginTop: 50}}
            />
          </ScrollView>
        )}
        <ListingsArticles
          colors={colors}
          data={savedArticles}
          onPress={openWebView}
          onRefresh={onRefresh}
          refreshing={isLoading}
          savedItems={savedArticles}
          pullToRefresh
          user={user}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedArticlesScreen;
