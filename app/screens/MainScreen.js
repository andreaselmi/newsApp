import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';

//store middleware
import {loadTopNews} from '../store/news';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const topArticles = useSelector((state) => state.news.topArticles);

  useEffect(() => {
    dispatch(loadTopNews());
  }, []);

  const onRefresh = () => {
    dispatch(loadTopNews());
  };

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ListingsArticles
          data={topArticles}
          onRefresh={onRefresh}
          onPress={openWebView}
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
});

export default MainScreen;
