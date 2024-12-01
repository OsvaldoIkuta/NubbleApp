import React from 'react';

import { ToastProvider } from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native';

import { Toast } from '@components';

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
      <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
