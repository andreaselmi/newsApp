import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Text from './Text';

const SectionText = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionItem}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
  },
  sectionItem: {
    fontSize: 21,
    fontWeight: '900',
  },
});

export default SectionText;
