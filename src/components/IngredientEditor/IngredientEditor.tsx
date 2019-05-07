import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Icon } from 'src/components';
import { Ingredient } from 'src/data';
import * as styles from './IngredientEditor.scss';

interface IngredientEditorProps {
  ingredient: Ingredient;
  onCancel: () => any;
  onChange: (ingredient: Ingredient) => any;
  onRemove: () => any;
}

const IngredientEditor = (props: IngredientEditorProps) => {
  const quantityRef = useRef<HTMLInputElement>();
  const [values, setValues] = useState<Ingredient>({ ...props.ingredient });

  useEffect(() => {
    const input = quantityRef.current;
    input.focus();
    input.select();
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      props.onChange(values);
    } else if (event.keyCode === 27) {
      props.onCancel();
    }
  };

  const handleCancel = (event: React.MouseEvent) => {
    props.onCancel();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    event.preventDefault();
    if (Number(values.quantity) === 0) {
      props.onRemove();
    } else {
      props.onChange(values);
    }
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.preventDefault();
    props.onRemove();
  };

  return (
    <form className={styles.ingredientEditor} onSubmit={handleSubmit}>
      <input
        ref={quantityRef}
        type="number"
        name="quantity"
        value={values.quantity}
        placeholder="qty"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="unit"
        value={values.unit}
        placeholder="unit"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="name"
        value={values.name}
        placeholder="ingredient"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.actions}>
        <a tabIndex={0} onClick={handleSubmit} title="Save">
          <Icon name="save" />
        </a>
        <a tabIndex={0} onClick={handleCancel} title="Cancel">
          <Icon name="cancel" />
        </a>
        <a tabIndex={0} onClick={handleRemove} title="Remove">
          <Icon name="delete" />
        </a>
      </div>
    </form>
  );
};

export default IngredientEditor;
