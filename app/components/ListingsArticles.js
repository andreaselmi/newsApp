import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

//components
import Card from './Card';

const ListingsArticles = ({data, isLoading, onRefresh = '', onPress}) => {
  return (
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
  );
};

export default ListingsArticles;
