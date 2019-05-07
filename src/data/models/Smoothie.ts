import { Ingredient } from 'src/data';

export interface Smoothie {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
}
