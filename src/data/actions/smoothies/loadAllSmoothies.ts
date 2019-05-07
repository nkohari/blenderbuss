import { Api, smoothiesLoading, smoothiesLoaded } from 'src/data';

export const loadAllSmoothies = () => async (dispatch, getState) => {
  try {
    dispatch(smoothiesLoading());
    const smoothies = await Api.loadAllSmoothies();
    dispatch(smoothiesLoaded(smoothies));
  } catch (error) {
    // TODO: Display this error to the user somehow (toaster, etc.)
    console.error(error); // tslint:disable-line
  }
};
