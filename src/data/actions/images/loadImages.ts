import axios from 'axios';
import { ReduxState, imagesLoading, imagesLoaded } from 'src/data';

const IMAGES_PER_GROUP = 10;

export const loadImages = (query: string) => async (dispatch, getState: () => ReduxState) => {
  // const existingResult = getState().images.get(query);
  // if (existingResult) return;

  try {
    dispatch(imagesLoading());

    const response = await axios.get(`/images?query=${encodeURIComponent(query)}&count=${IMAGES_PER_GROUP}`);
    const imageGroup = {
      id: query,
      imageUrls: response.data.photos.map(photo => photo.src.original),
    };

    dispatch(imagesLoaded([imageGroup]));
  } catch (error) {
    // TODO: Display this error to the user somehow (toaster, etc.)
    console.error(error); // tslint:disable-line
  }
};
