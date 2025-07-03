import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { TaskCard } from '../components/TaskCard';
import { sampleTasks } from '../utils/sampleData';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-background">
      <Text variant="titleLarge" className="mb-4">Today's Schedule</Text>
      {sampleTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ScrollView>
  );
};
