import colors from './colors';
import {DefaultTheme} from 'react-native-paper';

const theme = {
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

export default theme;
