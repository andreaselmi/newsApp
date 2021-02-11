import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const HeaderImage = ({source, style}) => {
  return (
    <View style={style}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },
});

export default HeaderImage;

// require('../assets/topnews.png')
