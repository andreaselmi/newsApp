import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import Text from '../components/Text';

const ArticleScreen = ({route, navigation}) => {
  const {imgUrl, title, subTitle, paragraph} = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icons}>
          <IonIcons
            onPress={() => navigation.navigate('Main')}
            name="md-close"
            size={32}
            color={colors.medium}
          />
          <IonIcons
            name="md-bookmark-outline"
            size={32}
            color={colors.medium}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imgUrl}} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
      <View style={styles.paragraphContainer}>
        <Text>{paragraph}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: '100%',
    position: 'absolute',
    top: 50,
    zIndex: 999,
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paragraphContainer: {
    padding: 20,
  },
  subTitleText: {
    color: colors.placeholder,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ArticleScreen;
