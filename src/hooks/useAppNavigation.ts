import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAuthCredentials} from '@services';

import {AppStackParamList} from '@routes';

export function useAppNavigation() {
  const {authCredentials} = useAuthCredentials();

  const navigation =
    useNavigation<StackNavigationProp<AppStackParamList>>();

  function toProfile(userId: number) {
    if (authCredentials?.user.id === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
    } else {
      navigation.push('ProfileScreen', {userId});
    }
  }

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;
  function toPostComment(params: Params): void {
    navigation.push('PostCommentScreen', params);
  }

  function toPostDetails(params: Params): void {
    navigation.push('PostCommentScreen', {...params, showPost: true});
  }

  const navigate = {
    toProfile,
    toPostComment,
    toPostDetails,
  };

  return navigate;
}
