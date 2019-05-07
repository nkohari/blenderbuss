import { Api, Smoothie, smoothiesLoading, smoothiesLoaded } from 'src/data';

export const saveSmoothie = (smoothie: Smoothie) => async (dispatch, getState) => {
  try {
    dispatch(smoothiesLoading());
    await Api.upsertSmoothie(smoothie);
    dispatch(smoothiesLoaded([smoothie]));
  } catch (error) {
    // TODO: Display this error to the user somehow (toaster, etc.)
    console.error(error); // tslint:disable-line
  }
};
