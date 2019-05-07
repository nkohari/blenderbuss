import * as React from 'react';
import { useState } from 'react';
import posed from 'react-pose';
import { Ingredient } from 'src/data';

interface IngredientEditorProps {
  ingredient: Ingredient;
  onSave: (ingredient: Ingredient) => any;
}

const Field = posed.input({
  normal: { outline: 'none' },
  error: { outline: '3px solid #f00' },
});

const IngredientEditor = (props: IngredientEditorProps) => {
  const [quantity, setQuantity] = useState<string>(String(props.ingredient.quantity));
  const [unit, setUnit] = useState<string>(props.ingredient.unit);
  const [name, setName] = useState<string>(props.ingredient.name);

  const handleChange = (setter: (value: string) => any) => (event: React.FormEvent<HTMLInputElement>) =>
    setter(event.currentTarget.value);

  return (
    <div>
      <Field type="number" value={quantity} onChange={handleChange(setQuantity)} />
    </div>
  );
};

export default IngredientEditor;
