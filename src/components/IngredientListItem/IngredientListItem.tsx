import * as React from 'react';
import { useState } from 'react';
import posed from 'react-pose';
import { HoverTarget, IngredientEditor } from 'src/components';
import { Ingredient } from 'src/data';
import * as styles from './IngredientListItem.scss';

interface IngredientListItemProps {
  ingredient: Ingredient;
  onChange: (ingredient: Ingredient) => any;
  onRemove: (ingredient: Ingredient) => any;
}

const Container = posed.div({
  normal: { background: 'rgba(0, 0, 0, 0)' },
  hover: { background: 'rgba(0, 0, 0, 0.15)' },
});

const IngredientListItem = (props: IngredientListItemProps) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (ingredient: Ingredient) => {
    props.onChange(ingredient);
    setEditing(false);
  };

  const handleRemove = () => {
    props.onRemove(props.ingredient);
    setEditing(false);
  };

  let content;
  if (isEditing) {
    content = (
      <IngredientEditor
        ingredient={props.ingredient}
        onCancel={handleCancel}
        onChange={handleChange}
        onRemove={handleRemove}
      />
    );
  } else {
    content = (
      <Container className={styles.content} onClick={() => setEditing(true)}>
        <div className={styles.quantity}>{props.ingredient.quantity}</div>
        <div className={styles.unit}>{props.ingredient.unit}</div>
        <div className={styles.name}>{props.ingredient.name}</div>
      </Container>
    );
  }

  return <HoverTarget className={styles.ingredientListItem}>{content}</HoverTarget>;
};

export default IngredientListItem;
