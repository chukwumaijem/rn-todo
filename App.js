import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import TodoProvider from './context';
import { HomeScreen } from './components/Main';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  };

  if (!isReady) {
    return (
      <AppLoading onFinish={() => setIsReady(true)} startAsync={loadFonts} />
    );
  }

  return (
    <TodoProvider>
      <HomeScreen />
    </TodoProvider>
  );
};

export default App;
