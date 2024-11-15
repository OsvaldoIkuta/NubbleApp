import React from 'react';

import {AppScreenProps} from 'src/routes/nativationType';

import {Button, Screen, Text} from '@components';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Setting Screen</Text>
      <Button preset="primary" title="Go to Setting Screen" />
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
