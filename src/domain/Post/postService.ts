import { apiAdapter } from '@api';
import { Post } from '@domain';
import { Page } from '@types';

import { postAdapter } from './postAdapter';
import {postApi} from './postApi';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}
export const postService = {
  getList,
};
