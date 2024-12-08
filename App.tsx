import React from 'react';

import {AuthCredentialsProvider, MMKVStorage, ToastProvider, initializeStorage} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

//independency injection
initializeStorage(MMKVStorage);
//initializeStorage(asyncStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  if (__DEV__) {
    const tron = Reactotron.configure({}).useReactNative().connect();

    tron.clear();
  }
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
