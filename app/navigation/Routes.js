import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

//navigators
import AppNavigator from './AppNavigator';
import AuthStack from './AuthStack';
import {useDispatch, useSelector} from 'react-redux';
import {authUser, logoutUser, signOutUser} from '../store/auth';

const Routes = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.isAuthenticated);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  // };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(logoutUser());
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {authenticated ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
