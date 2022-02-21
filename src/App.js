import React from "react";
import { View } from "react-native";

import CustomSoundNotification from './custom_sound_notification';

export default function App() {
  return <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }}>
    <CustomSoundNotification />
  </View>
}