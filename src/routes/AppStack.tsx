import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CameraScreen,
  DarkModeScreen,
  PostCommentScreen,
  ProfileScreen,
  PublishPostScreen,
  SearchScreen,
  SettingsScreen,
} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  DarkModeScreen: undefined;
  SettingsScreen: undefined;
  SearchScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
    showPost?: boolean;
  };
  ProfileScreen: {
    userId: number;
  };
  PublishPostScreen: {
    imageUri: string;
  };
  CameraScreen: undefined;
};
const Stack = createStackNavigator<AppStackParamList>();
interface Props {
  initialRouteName?: keyof AppStackParamList;
}
export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
