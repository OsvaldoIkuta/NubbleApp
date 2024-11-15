import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {StackScreenProps} from '@react-navigation/stack';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import { signUpSchema, SignUpSchema } from './signUpSchema';

type ScreenProps = StackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen(props: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
      control={control}
        label="Nome Completo"
        autoCapitalize="words"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
        name={'fullName'}
      />
      <FormTextInput
      control={control}
        label="E-mail"
        name={'email'}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
      control={control}
        label="Senha"
        name="password"
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={handleSubmit(submitForm)} title="Criar uma conta" />
    </Screen>
  );
}
