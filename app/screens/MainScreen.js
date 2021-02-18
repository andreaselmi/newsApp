import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

//components
import Screen from '../components/Screen';
import Card from '../components/Card';

//store middleware
import {loadNews} from '../store/news';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(loadNews('/top-headlines?'));
  }, []);

  const onRefresh = () => {
    dispatch(loadNews('/top-headlines?'));
  };

  return (
    <Screen>
      <View style={styles.container}>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView
              source={require('../assets/animations/loader.json')}
              autoPlay
              loop={isLoading}
            />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={articles}
            renderItem={({item}) => (
              <Card
                item={item}
                onPress={() => navigation.navigate('Article', {item})}
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
