import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, RefreshControl, StyleSheet, View, Button} from 'react-native';

//components
import Card from './Card';
import Text from './Text';
import Loader from './Loader';

const ListingsArticles = ({
  colors,
  data,
  error,
  refreshing,
  savedItems,
  onRefresh = null,
  onPress,
  user,
  ...restProps
}) => {
  return (
    <>
      {error ? (
        <View style={styles.errorContainer}>
          <Text>Impossibile caricare le notizie</Text>
          {onRefresh && <Button title="Riprova" onPress={onRefresh} />}
        </View>
      ) : refreshing ? (
        <Loader refreshing={refreshing} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <Card
              colors={colors}
              item={item}
              onPress={() => onPress(item)}
              savedItems={savedItems}
              user={user}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            onRefresh && (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            )
          }
          {...restProps}
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
