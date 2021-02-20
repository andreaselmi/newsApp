import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//components
import Screen from '../components/Screen';
import TextInput from '../components/form/TextInput';
import Text from '../components/Text';
import colors from '../config/colors';

//config

const SearchScreen = ({navigation}) => {
  return (
    <Screen>
      <View style={styles.container}>
        <TextInput
          iconColor={colors.placeholder}
          iconName="search"
          placeholder="search"
        />
        <View style={styles.sectionsContainer}>
          <Text style={styles.sectionsTitle}>Results</Text>
          {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={sections}
            renderItem={({item}) => (
              <SectionText
                onPress={() => navigation.navigate('SearchedArticles')}
                item={item}
              />
            )}
            key={(item) => item.id}
          /> */}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, flex: 1},
  sectionsContainer: {
    marginTop: 10,
    flex: 1,
  },
  sectionsTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.placeholder,
  },
});

export default SearchScreen;
