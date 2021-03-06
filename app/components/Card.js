import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

//components
import Text from './Text';
import ToggleIcon from './ToggleIcon';
//store
import {toggleSaveArticle} from '../store/news';

const MyCard = ({colors, item, onPress, savedItems, user}) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const {urlToImage} = item;
  const stringUrl = encodeURIComponent(JSON.stringify(item.url));

  useEffect(() => {
    const alreadySaved = savedItems.findIndex(
      (article) => article['url'] === item.url,
    );
    if (alreadySaved === -1) {
      setIsSaved(false);
    } else setIsSaved(true);
  }, [savedItems]);

  //save data on firebase firestore
  const storeData = () => {
    firestore()
      .collection('articles')
      .doc(`${stringUrl} user id: ${user.uid}`)
      .set({
        author: item.author,
        publishedAt: item.publishedAt,
        savedTime: firestore.Timestamp.fromDate(new Date()),
        title: item.title,
        userId: user.uid,
        urlToImage: item.urlToImage,
        url: item.url,
      })
      .catch((error) => {
        Alert("Non è stato possibile salvare l'articolo", error);
      });
  };

  //delete data from firebase firestore
  const deleteData = () => {
    firestore()
      .collection('articles')
      .doc(`${stringUrl} user id: ${user.uid}`)
      .delete();
  };

  const toggleArticle = async () => {
    dispatch(toggleSaveArticle(item));

    if (!isSaved) {
      storeData();
      setIsSaved(true);
    }
    if (isSaved) {
      deleteData();
      setIsSaved(false);
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: colors.backgroundCardColor,
            shadowColor: colors.shadow,
          },
        ]}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={
              urlToImage ? {uri: urlToImage} : require('../assets/topnews.png')
            }
            style={{width: '100%', height: '100%'}}
          />
          <ToggleIcon
            active="bookmark"
            color={colors.primary}
            inactive="bookmark-outline"
            isActive={isSaved}
            onPress={() => toggleArticle()}
            style={styles.iconContainer}
          />
        </View>
        <View style={styles.headerContainer}>
          <View>
            <Text numberOfLines={3}>
              {_.get(item, 'title', 'Titolo non disponibile')}
            </Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 15, color: colors.placeholder}}>
              {_.get(item, 'author', 'Autore non disponibile')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    elevation: 5,
    height: 275,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerContainer: {
    padding: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    height: 150,
  },
});

export default MyCard;
