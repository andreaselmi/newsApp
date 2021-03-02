import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';

//store middleware
import {loadTopNews, loadArticlesFromFirestore} from '../store/news';
import Text from '../components/Text';
import OfflineNotice from '../components/OfllineNotice';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const newsStore = useSelector((state) => state.news);
  const colors = useSelector((state) => state.config.colors);
  const user = useSelector((state) => state.user.currentUser);

  const {topArticles, savedArticles, error, isLoading} = newsStore;

  useEffect(() => {
    dispatch(loadTopNews());
    console.log(newsStore);
  }, []);

  useEffect(() => {
    if (user) dispatch(loadArticlesFromFirestore(user));
  }, [user]);

  const onRefresh = () => {
    dispatch(loadTopNews());
  };

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  return (
    <Screen>
      <OfflineNotice />
      <View style={styles.container}>
        <Text style={[styles.sectionsTitle, {color: colors.placeholder}]}>
          Top News dall'Italia
        </Text>
        <ListingsArticles
          colors={colors}
          data={topArticles}
          error={error}
          pullToRefresh
          refreshing={isLoading}
          savedItems={savedArticles}
          onRefresh={onRefresh}
          onPress={openWebView}
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
  sectionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MainScreen;
