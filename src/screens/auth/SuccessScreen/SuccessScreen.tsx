import React from 'react';

import { AuthScreenProps } from 'src/routes/nativationType';

import {Button, Icon, Screen, Text} from '@components';

export function SuccessScreen({route, navigation}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    // TODO: navegar para a tela de login
    navigation.navigate('LoginScreen');
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
