import * as React from 'react';
import { IngredientListItem } from 'src/components';
import { Ingredient } from 'src/data';
import * as styles from './IngredientList.scss';

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientList = (props: IngredientListProps) => (
  <ul className={styles.ingredientList}>
    {props.ingredients.map(ingredient => (
      <IngredientListItem ingredient={ingredient} />
    ))}
  </ul>
);

export default IngredientList;
