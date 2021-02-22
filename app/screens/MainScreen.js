import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

//components
import Screen from '../components/Screen';
import Card from '../components/Card';
import Text from '../components/Text';

//store middleware
import {apiCallBegan, loadTopNews} from '../store/news';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const topArticles = useSelector((state) => state.news.topArticles);
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(loadTopNews());
  }, []);

  const onRefresh = () => {
    dispatch(loadTopNews());
  };

  //TODO creare un component flatlist + Card da inserire qui e nel search screen

  return (
    <Screen>
      <View style={styles.container}>
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={topArticles}
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
  errorContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default MainScreen;
