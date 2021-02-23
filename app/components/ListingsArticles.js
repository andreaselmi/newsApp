import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

//components
import Card from './Card';
import Text from './Text';

const ListingsArticles = ({data, onRefresh = '', onPress}) => {
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  return (
    <>
      {error && (
        <View style={styles.errorContainer}>
          <Text>Impossibile caricare le notizie</Text>
          <Button title="Riprova" onPress={onRefresh} />
        </View>
      )}
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
          data={data}
          renderItem={({item}) => (
            <Card item={item} onPress={() => onPress(item)} />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            onRefresh && (
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            )
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default ListingsArticles;
