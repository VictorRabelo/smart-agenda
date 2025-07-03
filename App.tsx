import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens/HomeScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { AddTaskScreen } from './src/screens/AddTaskScreen';
import { StatsScreen } from './src/screens/StatsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { useAppTheme } from './src/hooks/useAppTheme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [dark, setDark] = useState(false);
  const theme = useAppTheme(dark);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Add Task" component={AddTaskScreen} />
          <Tab.Screen name="Stats" component={StatsScreen} />
          <Tab.Screen name="Settings">
            {() => <SettingsScreen onToggleTheme={() => setDark(!dark)} isDark={dark} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
