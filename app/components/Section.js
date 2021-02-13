import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//components
import Text from './Text';

const Section = ({item}) => {
  return (
    <View>
      <ImageBackground
        style={styles.sectionContainer}
        resizeMode="cover"
        source={{uri: item.imgUrl}}>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0.5, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#6B6B6B00', 'black']}>
          <Text style={styles.sectionText}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  sectionContainer: {
    width: 100,
    height: 100,
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  sectionText: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Section;
