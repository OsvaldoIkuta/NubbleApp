import React from 'react';

import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export function Router() {
  const authenticated = true;

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        {authenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
