import { Collection, Smoothie, smoothiesLoading, smoothiesLoaded } from 'src/data';

type SmoothieAction = ReturnType<typeof smoothiesLoading> | ReturnType<typeof smoothiesLoaded>;

const defaultState = new Collection<Smoothie>({ isLoading: true });

export function SmoothieReducer(
  state: Collection<Smoothie> = defaultState,
  action: SmoothieAction
): Collection<Smoothie> {
  switch (action.type) {
    case 'SMOOTHIES_LOADING':
      return state.next({ isLoading: true });
    case 'SMOOTHIES_LOADED':
      return state.merge(action.payload, { isLoading: false });
    default:
      return state;
  }
}
