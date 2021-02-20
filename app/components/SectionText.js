import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import Text from './Text';

const SectionText = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.sectionItem}>{item.name}</Text>
      </View>
    </TouchableOpacity>
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
