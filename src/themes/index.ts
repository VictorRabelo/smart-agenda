import { MD3LightTheme as PaperLightTheme, MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';

export const LightTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
  },
};

export const DarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
  },
};
