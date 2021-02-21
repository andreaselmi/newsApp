import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//components
import Screen from '../components/Screen';
import TextInput from '../components/form/TextInput';
import Text from '../components/Text';
import {useSelector} from 'react-redux';

//config

const SearchScreen = ({navigation}) => {
  const colors = useSelector((state) => state.config.colors);
  return (
    <Screen>
      <View style={styles.container}>
        <TextInput
          iconColor={colors.placeholder}
          iconName="search"
          placeholder="search"
        />
        <View style={styles.sectionsContainer}>
          <Text style={[styles.sectionsTitle, {color: colors.placeholder}]}>
            Results
          </Text>
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
  },
});

export default SearchScreen;
