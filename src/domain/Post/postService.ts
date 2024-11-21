import { apiAdapter } from '@api';
import { Post } from '@domain';
import { Page } from '@types';

import { postAdapter } from './postAdapter';
import {postApi} from './postApi';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  // throw new Error('Erro de teste');
  // return [];
  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}
export const postService = {
  getList,
};
