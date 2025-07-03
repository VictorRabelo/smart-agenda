import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Task } from '../utils/sampleData';

interface Props {
  task: Task;
}

export const TaskCard: React.FC<Props> = ({ task }) => (
  <Card className="mb-2">
    <Card.Content className="flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-semibold">{task.title}</Text>
        <Text className="text-sm text-gray-500">{task.category}</Text>
      </View>
      <View>
        <Text className="text-xs text-gray-400">{task.startTime} - {task.endTime}</Text>
      </View>
    </Card.Content>
  </Card>
);
