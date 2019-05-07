import { Smoothie } from 'src/data';

interface SmoothiesLoadedAction {
  type: 'SMOOTHIES_LOADED';
  payload: Smoothie[];
}

export const smoothiesLoaded = (smoothies: Smoothie[]): SmoothiesLoadedAction => ({
  type: 'SMOOTHIES_LOADED',
  payload: smoothies,
});
