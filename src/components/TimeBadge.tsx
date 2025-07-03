import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  time: string;
}

export const TimeBadge: React.FC<Props> = ({ time }) => (
  <View className="bg-blue-500 px-2 py-1 rounded-full">
    <Text className="text-xs text-white">{time}</Text>
  </View>
);
