import * as React from 'react';
import posed from 'react-pose';
import { HoverTarget } from 'src/components';
import { Ingredient } from 'src/data';
import * as styles from './IngredientListItem.scss';

interface IngredientListItemProps {
  ingredient: Ingredient;
}

const Container = posed.div({
  normal: { background: 'rgba(0, 0, 0, 0)' },
  hover: { background: 'rgba(0, 0, 0, 0.15)' },
});

const IngredientListItem = (props: IngredientListItemProps) => (
  <HoverTarget className={styles.ingredientListItem}>
    <Container className={styles.content}>
      <div className={styles.quantity}>{props.ingredient.quantity}</div>
      <div className={styles.unit}>{props.ingredient.unit}</div>
      <div className={styles.name}>{props.ingredient.name}</div>
    </Container>
  </HoverTarget>
);

export default IngredientListItem;
