import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';

//config
import IonIcons from 'react-native-vector-icons/Ionicons';

const UiProvider = ({children}) => {
  const isDarkMode = useSelector((state) => state.config.isDarkMode);
  const colors = useSelector((state) => state.config.colors);

  const darkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.inputBackgroundColor,
      text: colors.textColor,
      error: colors.danger,
      placeholder: colors.placeholder,
    },
  };

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      error: colors.danger,
      placeholder: colors.placeholder,
    },
  };

  return (
    <PaperProvider
      theme={isDarkMode ? darkTheme : lightTheme}
      settings={{
        icon: (props) => <IonIcons {...props} />,
      }}>
      {children}
    </PaperProvider>
  );
};

export default UiProvider;
