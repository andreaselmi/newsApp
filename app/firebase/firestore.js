import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const storeData = (item, user) => {
  firestore()
    .collection('articles')
    .doc(`${item.publishedAt} user id: ${user.uid}`)
    .set({
      author: item.author,
      publishedAt: item.publishedAt,
      savedTime: firestore.Timestamp.fromDate(new Date()),
      title: item.title,
      userId: user.uid,
      urlToImage: item.urlToImage,
      url: item.url,
    })
    .then(() => {
      console.log('Article Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
};

export const deleteData = (item, user) => {
  firestore()
    .collection('articles')
    .doc(`${item.publishedAt} user id: ${user.uid}`)
    .delete()
    .then(() => {
      console.log('User deleted!');
    });
};
