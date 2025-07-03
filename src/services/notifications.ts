import * as Notifications from 'expo-notifications';

export const scheduleReminder = async (title: string, body: string, date: Date) => {
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: date,
  });
};
