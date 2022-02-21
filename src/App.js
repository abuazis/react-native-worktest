import React from "react";
import { Button, View } from "react-native";
import notifee, { AndroidImportance } from '@notifee/react-native';

export default function App() {
  async function onDisplayNotification() {
    await notifee.requestPermission();

    // Android >= 8.0 (API level 26)
    const channelId = await notifee.createChannel({
      id: 'custom-sound',
      name: 'Channel with custom sound',
      sound: 'hollow',
      vibration: false,
    });

    // Android < 8.0 (API level 26)
    await notifee.displayNotification({
      body: 'Custom sound',
      android: {
        channelId,
        sound: 'hollow',
      },
    });
  };

  return <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }}>
    <Button title="Test Sound" onPress={() => onDisplayNotification()} />
  </View>
}