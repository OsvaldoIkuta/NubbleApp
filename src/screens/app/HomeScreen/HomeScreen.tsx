import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, postService} from '@domain';
import {QueryKeys} from '@infra';
import {useScrollToTop} from '@react-navigation/native';
import {AppTabScreenProps} from 'src/routes/nativationType';

import {InfinityScrollList, PostItem, Screen} from '@components';

import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item, index}: ListRenderItemInfo<Post>) {
    return <PostItem key={index} post={item} />;
  }

  return (
    <Screen style={$screen}>
      <InfinityScrollList
        queryKey={QueryKeys.PostList}
        getList={postService.getList}
        renderItem={renderItem}
        flatListProps={{ListHeaderComponent: <HomeHeader />}}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
