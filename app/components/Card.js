import React, {useCallback} from 'react';
import {View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import _ from 'lodash';

//components
import Text from './Text';

//config
import colors from '../config/colors';

const MyCard = ({item, onPress}) => {
  const {urlToImage, url} = item;

  const openUrl = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={openUrl}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={
              urlToImage ? {uri: urlToImage} : require('../assets/topnews.png')
            }
          />
        </View>
        <View style={styles.headerContainer}>
          <View>
            <Text numberOfLines={3}>
              {_.get(item, 'title', 'Titolo non disponibile')}
            </Text>
            <Text style={styles.author}>
              {_.get(item, 'author', 'Autore non disponibile')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  author: {
    fontSize: 15,
    color: colors.placeholder,
  },
  cardContainer: {
    backgroundColor: colors.dark,
    marginTop: 20,
    height: 275,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerContainer: {
    padding: 10,
  },
  imageContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
  },
});

export default MyCard;
