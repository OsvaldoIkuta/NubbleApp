import {useNavigation} from '@react-navigation/native';
import { AuthScreenProps } from 'src/routes/nativationType';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();
  function reset(params: AuthScreenProps<'SuccessScreen'>) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }
  return {reset};
}
