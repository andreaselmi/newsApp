import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
// import firestore from '@react-native-firebase/firestore';

//components
import Text from './Text';
import ToggleIcon from './ToggleIcon';

//firestore
import {storeData, deleteData} from '../firebase/firestore';
import {toggleSaveArticle} from '../store/news';

const MyCard = ({item, onPress}) => {
  //select from store
  const colors = useSelector((state) => state.config.colors);
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [isSaved, setIsSaved] = useState(false);
  const {urlToImage} = item;

  useEffect(() => {
    const alreadySaved = savedArticles.findIndex(
      (article) => article['url'] === item.url,
    );
    if (alreadySaved === -1) {
      setIsSaved(false);
    } else setIsSaved(true);
  }, [savedArticles]);

  const storeArticle = async (item, user) => {
    dispatch(toggleSaveArticle(item));

    if (!isSaved) {
      storeData(item, user);
    }

    if (isSaved) {
      deleteData(item);
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
            onPress={() => storeArticle(item, user)}
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
