import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';
import Text from '../components/Text';
import {loadArticlesFromFirestore} from '../store/news';
import EmptyScreenPlaceholder from '../components/EmptyScreenPlaceholder';

const SavedArticlesScreen = ({navigation}) => {
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const user = useSelector((state) => state.user.currentUser);
  const colors = useSelector((state) => state.config.colors);
  const dispatch = useDispatch();

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  const onRefresh = () => {
    dispatch(loadArticlesFromFirestore(user));
  };

  return (
    <Screen>
      <View style={styles.container}>
        {savedArticles.length === 0 && (
          <EmptyScreenPlaceholder
            colors={colors}
            text="Non ci sono articoli salvati"
          />
        )}
        <ListingsArticles
          data={savedArticles}
          onPress={openWebView}
          onRefresh={onRefresh}
          pullToRefresh
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
