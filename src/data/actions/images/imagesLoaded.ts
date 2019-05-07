import { ImageGroup } from 'src/data';

interface ImagesLoadedAction {
  type: 'IMAGES_LOADED';
  payload: ImageGroup[];
}

export const imagesLoaded = (imageGroups: ImageGroup[]): ImagesLoadedAction => ({
  type: 'IMAGES_LOADED',
  payload: imageGroups,
});
