import React from 'react';
import { View } from 'react-native';
import { Switch, Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';

interface Props {
  onToggleTheme: () => void;
  isDark: boolean;
}

export const SettingsScreen: React.FC<Props> = ({ onToggleTheme, isDark }) => {
  const scheme = useColorScheme();

  return (
    <View className="flex-1 p-4 bg-background">
      <Text variant="titleLarge" className="mb-2">Appearance</Text>
      <View className="flex-row justify-between items-center">
        <Text>Dark Theme</Text>
        <Switch value={isDark} onValueChange={onToggleTheme} />
      </View>
    </View>
  );
};
