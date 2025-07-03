import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const StatsScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-background">
      <Text variant="titleLarge" className="mb-4">Weekly Stats</Text>
      <BarChart
        data={{
          labels: ['Work', 'Study', 'Health', 'Family'],
          datasets: [
            {
              data: [10, 6, 4, 2],
            },
          ],
        }}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => '#3b82f6',
        }}
      />
    </ScrollView>
  );
};
