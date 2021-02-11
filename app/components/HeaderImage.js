import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const HeaderImage = ({source, style}) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default HeaderImage;
