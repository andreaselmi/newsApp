import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, RefreshControl, StyleSheet, View, Button} from 'react-native';

//components
import Card from './Card';
import Text from '../components/Text';
import Loader from '../components/Loader';

const ListingsArticles = ({data, error, onRefresh = null, onPress}) => {
  const isLoading = useSelector((state) => state.news.isLoading);

  return (
    <>
      {error ? (
        <View style={styles.errorContainer}>
          <Text>Impossibile caricare le notizie</Text>
          {onRefresh && <Button title="Riprova" onPress={onRefresh} />}
        </View>
      ) : isLoading ? (
        <Loader isLoading={isLoading} />
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
