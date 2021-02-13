import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

//components
import Text from './Text';

//config
import colors from '../config/colors';

const MyCard = ({item}) => {
  const {imgUrl, title, subTitle, paragraph} = item;

  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={{uri: imgUrl}}
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph} numberOfLines={3}>
              {paragraph}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.dark,
    marginTop: 20,
    height: 300,
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
  imageContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
  },
  paragraph: {
    fontSize: 13,
    color: colors.light,
    marginTop: 10,
  },
  paragraphContainer: {
    height: 80,
    overflow: 'hidden',
  },
  textContainer: {
    padding: 10,
  },
  subTitle: {
    fontSize: 15,
    color: colors.placeholder,
  },
});

export default MyCard;
