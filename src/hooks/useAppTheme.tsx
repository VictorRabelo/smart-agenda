import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../themes';

export const useAppTheme = (isDark: boolean) => {
  const system = useColorScheme() === 'dark';
  return isDark || system ? DarkTheme : LightTheme;
};
