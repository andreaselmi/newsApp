import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const storeData = (item, user) => {
  firestore()
    .collection('articles')
    .doc(item.publishedAt)
    .set({
      userId: user.uid,
      title: item.title,
      author: item.author,
      urlToImage: item.urlToImage,
      savedTime: firestore.Timestamp.fromDate(new Date()),
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

export const deleteData = (item) => {
  firestore()
    .collection('articles')
    .doc(item.publishedAt)
    .delete()
    .then(() => {
      console.log('User deleted!');
    });
};
