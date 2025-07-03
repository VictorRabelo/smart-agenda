export type Task = {
  id: string;
  title: string;
  category: string;
  startTime: string;
  endTime: string;
};

export const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Morning Exercise',
    category: 'Health',
    startTime: '07:00',
    endTime: '07:30',
  },
  {
    id: '2',
    title: 'Work on Project',
    category: 'Work',
    startTime: '09:00',
    endTime: '12:00',
  },
];
