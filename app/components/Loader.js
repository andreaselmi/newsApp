import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = ({isLoading}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{width: 200, height: 200}}
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop={isLoading}
      />
    </View>
  );
};

export default Loader;
