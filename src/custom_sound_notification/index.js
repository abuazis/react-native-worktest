import React from "react";
import { Text } from "react-native";
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

async function onAppBootstrap() {
  // request permission for iOS
  await notifee.requestPermission();

  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  const token = await messaging().getToken();

  // Print the token
  // Put on "to" request on postman
  console.log(`Your token device : ${token}`);

  // Init notif channel
  await notifee.createChannel({
    id: 'custom-sound',
    name: 'Channel with custom sound',
    sound: 'hollow',
    vibration: false,
  });
}

export default function Index() {
  onAppBootstrap();

  function onMessageReceived(message) {
    console.log(message);
  }

  // Listen foreground notification, but will be not showed
  messaging().onMessage(onMessageReceived);

  // Listen background event (firebase messaging)
  messaging().setBackgroundMessageHandler(onMessageReceived);   

  return <Text>Selamat Datang Di Lab Custom Sound Notifications</Text>
}