import { Api, ReduxState, smoothiesLoading, smoothiesLoaded } from 'src/data';

export const loadSmoothie = (id: string) => async (dispatch, getState: () => ReduxState) => {
  if (getState().smoothies.has(id)) return;

  try {
    dispatch(smoothiesLoading());
    const smoothie = await Api.loadSmoothie(id);
    dispatch(smoothiesLoaded([smoothie]));
  } catch (error) {
    // TODO: Display this error to the user somehow (toaster, etc.)
    console.error(error); // tslint:disable-line
  }
};
