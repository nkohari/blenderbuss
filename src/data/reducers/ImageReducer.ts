import { Collection, ImageGroup, imagesLoading, imagesLoaded } from 'src/data';

type ImageAction = ReturnType<typeof imagesLoading> | ReturnType<typeof imagesLoaded>;

const defaultState = new Collection<ImageGroup>({ isLoading: true });

export function ImageReducer(
  state: Collection<ImageGroup> = defaultState,
  action: ImageAction
): Collection<ImageGroup> {
  switch (action.type) {
    case 'IMAGES_LOADING':
      return state.next({ isLoading: true });
    case 'IMAGES_LOADED':
      return state.merge(action.payload, { isLoading: false });
    default:
      return state;
  }
}
