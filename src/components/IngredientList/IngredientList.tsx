import * as React from 'react';
import { useState } from 'react';
import { Button, IngredientEditor, IngredientListItem } from 'src/components';
import { Ingredient } from 'src/data';
import { createId } from 'src/util';
import * as styles from './IngredientList.scss';

interface IngredientListProps {
  ingredients: Ingredient[];
  onAdd: (ingredient: Ingredient) => any;
  onChange: (ingredient: Ingredient) => any;
  onRemove: (ingredient: Ingredient) => any;
}

const createNewIngredient = (): Ingredient => ({
  id: createId(),
  quantity: 1,
  unit: '',
  name: '',
});

const IngredientList = (props: IngredientListProps) => {
  const [newIngredient, setNewIngredient] = useState<Ingredient>();

  const handleAddIngredient = (event: React.MouseEvent) => {
    setNewIngredient(createNewIngredient());
  };

  const handleNewIngredientSaved = (ingredient: Ingredient) => {
    props.onAdd(ingredient);
    setNewIngredient(null);
  };

  const handleNewIngredientCanceled = () => {
    setNewIngredient(null);
  };

  let add;
  if (newIngredient) {
    add = (
      <IngredientEditor
        ingredient={newIngredient}
        onCancel={handleNewIngredientCanceled}
        onChange={handleNewIngredientSaved}
        onRemove={handleNewIngredientCanceled}
      />
    );
  } else {
    add = (
      <Button icon="add" onClick={handleAddIngredient}>
        Add ingredient
      </Button>
    );
  }

  return (
    <ul className={styles.ingredientList}>
      {props.ingredients.map(ingredient => (
        <IngredientListItem ingredient={ingredient} onChange={props.onChange} onRemove={props.onRemove} />
      ))}
      <li className={styles.add}>{add}</li>
    </ul>
  );
};

export default IngredientList;
