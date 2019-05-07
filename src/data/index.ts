export * from './api/Api';
export * from './framework/Collection';
import { configureStoreForDevelopment } from './framework/configureStoreForDevelopment';
import { configureStoreForProduction } from './framework/configureStoreForProduction';

export const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreForProduction : configureStoreForDevelopment;

export * from './actions';
export * from './models/Smoothie';
export * from './models/ImageGroup';
export * from './models/Ingredient';

import { ImageReducer } from './reducers/ImageReducer';
import { SmoothieReducer } from './reducers/SmoothieReducer';

export const reducers = {
  images: ImageReducer,
  smoothies: SmoothieReducer,
};

export interface ReduxState {
  images: ReturnType<typeof ImageReducer>;
  smoothies: ReturnType<typeof SmoothieReducer>;
}
