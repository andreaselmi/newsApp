import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {WebView} from 'react-native-webview';
//components
import Screen from '../components/Screen';
import Card from '../components/Card';
import Text from '../components/Text';

//store middleware
import {loadNews} from '../store/news';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(loadNews('/top-headlines?'));
  }, []);

  const onRefresh = () => {
    dispatch(loadNews('/top-headlines?'));
  };

  return (
    <Screen>
      <View style={styles.container}>
        {error && (
          <View style={{marginTop: 20}}>
            <Text>Impossibile caricare le notizie</Text>
            <Button
              title="Riprova"
              onPress={() => dispatch(loadNews('/top-headlines?'))}
            />
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={articles.articles}
            renderItem={({item}) => (
              <Card
                item={item}
                onPress={() => navigation.navigate('WebView', {url: item.url})}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
          />
        )}
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
