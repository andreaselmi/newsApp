import React from 'react';
import {View, StyleSheet, Image, ScrollView, FlatList} from 'react-native';

import Screen from '../components/Screen';
import Text from '../components/Text';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import Card from '../components/Card';

const MainScreen = ({navigation}) => {
  const articles = [
    {
      id: '1',
      title: "Hello I'm a title",
      subTitle: 'tech',
      imgUrl: 'https://picsum.photos/id/100/400',
      paragraph:
        'Sint officia ipsum dolore irure fugiat officia ex voluptate elit enim duis. Exercitation laborum tempor duis irure. Elit Lorem fugiat ut ullamco dolore nulla tempor occaecat consectetur laborum pariatur aute exercitation exercitation. Sunt aliquip et do amet anim mollit irure enim do enim. Irure ad consequat pariatur elit do. Aute occaecat commodo ipsum ipsum veniam aute tempor.',
    },
    {
      id: '5',
      title: "Hello I'm a title",
      subTitle: 'tech',
      imgUrl: 'https://picsum.photos/id/1004/400',
      paragraph:
        'Sint officia ipsum dolore irure fugiat officia ex voluptate elit enim duis. Exercitation laborum tempor duis irure. Elit Lorem fugiat ut ullamco dolore nulla tempor occaecat consectetur laborum pariatur aute exercitation exercitation. Sunt aliquip et do amet anim mollit irure enim do enim. Irure ad consequat pariatur elit do. Aute occaecat commodo ipsum ipsum veniam aute tempor.',
    },
    {
      id: '4',
      title: "Hello I'm a title",
      subTitle: 'tech',
      imgUrl: 'https://picsum.photos/id/25/400',
      paragraph:
        'Sint officia ipsum dolore irure fugiat officia ex voluptate elit enim duis. Exercitation laborum tempor duis irure. Elit Lorem fugiat ut ullamco dolore nulla tempor occaecat consectetur laborum pariatur aute exercitation exercitation. Sunt aliquip et do amet anim mollit irure enim do enim. Irure ad consequat pariatur elit do. Aute occaecat commodo ipsum ipsum veniam aute tempor.',
    },
    {
      id: '3',
      title: "Hello I'm a title",
      subTitle: 'tech',
      imgUrl: 'https://picsum.photos/id/1009/400',
      paragraph:
        'Sint officia ipsum dolore irure fugiat officia ex voluptate elit enim duis. Exercitation laborum tempor duis irure. Elit Lorem fugiat ut ullamco dolore nulla tempor occaecat consectetur laborum pariatur aute exercitation exercitation. Sunt aliquip et do amet anim mollit irure enim do enim. Irure ad consequat pariatur elit do. Aute occaecat commodo ipsum ipsum veniam aute tempor.',
    },
    {
      id: '2',
      title: "Hello I'm a title",
      subTitle: 'tech',
      imgUrl: 'https://picsum.photos/id/56/400',
      paragraph:
        'Sint officia ipsum dolore irure fugiat officia ex voluptate elit enim duis. Exercitation laborum tempor duis irure. Elit Lorem fugiat ut ullamco dolore nulla tempor occaecat consectetur laborum pariatur aute exercitation exercitation. Sunt aliquip et do amet anim mollit irure enim do enim. Irure ad consequat pariatur elit do. Aute occaecat commodo ipsum ipsum veniam aute tempor.',
    },
  ];

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default MainScreen;
