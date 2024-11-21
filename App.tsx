import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native';

import { Router } from './src/routes/Routes';
import {theme} from './src/theme/theme';


function App(): React.JSX.Element {
  if (__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.3.106' })
    .useReactNative()
    .connect();

  tron.clear();
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
