import React from 'react';

import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {IconProps} from '@components';
import {
  LoginScreen,
  ForgotPasswordScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  const ed = '';
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
