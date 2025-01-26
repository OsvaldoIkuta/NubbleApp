import {useEffect, useState} from 'react';

import { QueryKeys } from '@infra';
import { PhotoListPaginated } from '@services';
import { useInfiniteQuery } from '@tanstack/react-query';

import { multimediaService } from './multimediaService';

export function useMultimediaGetPhotos(
  hasPermission: boolean,
  onInitialLoad?: (imageUri: string) => void,
) {
  const [list, setList] = useState<string[]>([]);

  const query = useInfiniteQuery<PhotoListPaginated>({
    queryKey: [QueryKeys.CameraRollList],
    queryFn: ({pageParam}) => multimediaService.getPhotos(pageParam),
    initialPageParam: undefined,
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  function fetchNextPage() {
    if (hasPermission) {
      query.fetchNextPage();
    }
  }

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setList(newList);

      if (query.data.pages.length === 1 && onInitialLoad) {
        onInitialLoad(newList[0]);
      }
    }
  }, [onInitialLoad, query.data]);

  return {
    photoList: list,
    hasNextPage: query.hasNextPage,
    fetchNextPage,
  };
}
