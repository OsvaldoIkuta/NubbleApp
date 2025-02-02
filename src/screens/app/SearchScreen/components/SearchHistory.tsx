import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();

  function renderItem({item, index}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        key={index}
        user={item}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon
            color="primary"
            name="trash"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text mb="s16" preset="headingMedium">
            Buscas recentes
          </Text>
        }
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}
