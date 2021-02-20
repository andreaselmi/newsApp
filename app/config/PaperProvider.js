import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';

//config
import colors from './colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.darkGray,
    text: colors.white,
    error: colors.danger,
    placeholder: colors.placeholder,
  },
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    error: colors.danger,
    placeholder: colors.placeholder,
  },
};

const UiProvider = ({children}) => {
  const darkMode = useSelector((state) => state.config.darkMode);

  return (
    <PaperProvider
      theme={darkMode ? darkTheme : lightTheme}
      settings={{
        icon: (props) => <IonIcon {...props} />,
      }}>
      {children}
    </PaperProvider>
  );
};

export default UiProvider;
