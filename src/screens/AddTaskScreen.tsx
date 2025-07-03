import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddTaskScreen: React.FC = () => {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    // Persist to storage (sample only)
    const existing = await AsyncStorage.getItem('tasks');
    const tasks = existing ? JSON.parse(existing) : [];
    tasks.push({ id: Date.now().toString(), title });
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    setTitle('');
  };

  return (
    <View className="flex-1 p-4 bg-background">
      <TextInput
        label="Task Title"
        value={title}
        onChangeText={setTitle}
        className="mb-2"
      />
      <Button mode="contained" onPress={addTask}>Add</Button>
    </View>
  );
};
