import React, { useEffect } from 'react';

import { settingsService, useAppColor } from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native';

import {Toast} from '@components';
import { useAppColorScheme } from '@hooks';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {darkTheme, theme} from './src/theme/theme';

//independency injection
initializeStorage(MMKVStorage);
//initializeStorage(asyncStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useAppColorScheme();
  const appColor = useAppColor();

  if (__DEV__) {
    const tron = Reactotron.configure({}).useReactNative().connect();
    tron.clear();
  }

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
