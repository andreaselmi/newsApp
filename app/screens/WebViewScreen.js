import React from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

const WebViewScreen = ({route}) => {
  const {url} = route.params;

  console.log(url);
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
