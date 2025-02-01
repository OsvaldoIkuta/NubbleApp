import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {OnboardingScreen} from '@screens';

export type OnboardingStackParamList = {
  OnboardingScreen: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
