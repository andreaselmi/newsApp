import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';

//store middleware
import {loadTopNews} from '../store/news';
import Text from '../components/Text';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const topArticles = useSelector((state) => state.news.topArticles);
  const colors = useSelector((state) => state.config.colors);
  const error = useSelector((state) => state.news.loadTopNewsError);

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
        <Text style={[styles.sectionsTitle, {color: colors.placeholder}]}>
          Top News dall'Italia
        </Text>
        <ListingsArticles
          data={topArticles}
          error={error}
          onRefresh={onRefresh}
          pullToRefresh
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
  sectionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MainScreen;
