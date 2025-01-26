import { Platform } from 'react-native';

import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Image } from 'react-native-compressor';

import {ImageForUpload, PhotoListPaginated} from './multimediaType';

async function getPhotos(cursor: any): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({first: 12, after: cursor});

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

/**
 *
 * @param imageUri image path
 * @returns `ImageForUpload` - an object with props requested by a `FormData`
 */
async function prepareImageForUpload(
  imageUri: string,
): Promise<ImageForUpload> {
  console.log('imageUri:', imageUri);
  /*const image = await manipulateAsync(prepareImageUri(imageUri), [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });*/
  const image = await Image.compress(prepareImageUri(imageUri), {
    compressionMethod: 'manual',
    maxWidth: 1800,
    quality: 0.5,
    output: 'jpg',
});

  return {
    uri: image,
    name: Date.now().toString(),
    type: 'image/jpeg',
  };
}

/**
 *
 * @param imageUri image path as provided by either by camera or gallery modules
 *
 * @returns an imageUri ready to be used in the `Image` component and `FormData` requests
 */
function prepareImageUri(imageUri: string): string {
  if (Platform.OS !== 'android') {
    return imageUri;
  }

  if (imageUri.startsWith('content://')) {
    return imageUri;
  }

  if (imageUri.startsWith('file://')) {
    return imageUri;
  }

  return `file://${imageUri}`;
}

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
  prepareImageUri,
};
