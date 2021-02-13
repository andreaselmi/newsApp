import colors from './colors';
import {DefaultTheme} from 'react-native-paper';

const darkMode = true;

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.darkGray,
    text: colors.white,
    error: colors.danger,
    placeholder: colors.placeholder,
  },
};

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.darkGray,
    text: colors.black,
    error: colors.danger,
    placeholder: colors.placeholder,
  },
};

export default darkMode ? darkTheme : lightTheme;
