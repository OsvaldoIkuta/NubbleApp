import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';

import {Button, Icon, Screen, Text} from '@components';
import {RootStackParamList} from '@routes';
type ScreenProps = StackScreenProps<RootStackParamList, 'SuccessScreen'>;
export function SuccessScreen({route, navigation}: ScreenProps) {
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
