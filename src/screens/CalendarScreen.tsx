import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

export const CalendarScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-background">
      <Agenda
        items={{}}
        selected={new Date().toISOString().split('T')[0]}
        renderEmptyDate={() => <Text className="p-4">No tasks</Text>}
      />
    </ScrollView>
  );
};
