import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

//components
import Screen from '../components/Screen';
import ListingsArticles from '../components/ListingsArticles';
import Text from '../components/Text';

const SavedArticlesScreen = ({navigation}) => {
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const colors = useSelector((state) => state.config.colors);

  const openWebView = (item) => {
    navigation.navigate('WebView', {url: item.url});
  };

  return (
    <Screen>
      <View style={styles.container}>
        {savedArticles.length === 0 && (
          <View style={styles.textContainer}>
            <Text style={[styles.text, {color: colors.placeholder}]}>
              Non ci sono articoli salvati
            </Text>
          </View>
        )}
        <ListingsArticles data={savedArticles} onPress={openWebView} />
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
