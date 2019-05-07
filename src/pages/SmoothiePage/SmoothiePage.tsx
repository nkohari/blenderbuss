import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { IngredientList, Page, SplashImage } from 'src/components';
import { Ingredient, loadSmoothie, ReduxState, saveSmoothie, Smoothie } from 'src/data';
import * as styles from './SmoothiePage.scss';

interface SmoothiePageParams {
  smoothieId: string;
}

interface SmoothiePageDeclaredProps extends RouteComponentProps<SmoothiePageParams> {}

interface SmoothiePageConnectedProps {
  isLoading: boolean;
  saveSmoothie: (smoothie: Smoothie) => Promise<void>;
  smoothie: Smoothie;
  loadSmoothie: (id: string) => Promise<void>;
}

const SmoothiePage = (props: SmoothiePageDeclaredProps & SmoothiePageConnectedProps) => {
  useEffect(() => {
    props.loadSmoothie(props.smoothieId);
  }, [props.smoothieId]);

  const handleIngredientAdded = (ingredient: Ingredient) => {
    console.log({ action: 'add', ingredient });
    props.saveSmoothie({
      ...props.smoothie,
      ingredients: [...props.smoothie.ingredients, ingredient],
    });
  };

  const handleIngredientChanged = (ingredient: Ingredient) => {
    console.log({ action: 'change', ingredient });
    props.saveSmoothie({
      ...props.smoothie,
      ingredients: props.smoothie.ingredients.map(item => (item.id === ingredient.id ? ingredient : item)),
    });
  };

  const handleIngredientRemoved = (ingredient: Ingredient) => {
    console.log({ action: 'remove', ingredient });
    props.saveSmoothie({
      ...props.smoothie,
      ingredients: props.smoothie.ingredients.filter(item => item.id !== ingredient.id),
    });
  };

  const title = props.smoothie ? props.smoothie.name : 'Loading';

  return (
    <Page title={title} icon="smoothie" backUrl="/" isLoading={props.isLoading}>
      {() => (
        <div className={styles.layout}>
          <IngredientList
            ingredients={props.smoothie.ingredients}
            onAdd={handleIngredientAdded}
            onChange={handleIngredientChanged}
            onRemove={handleIngredientRemoved}
          />
          <SplashImage smoothie={props.smoothie} />
        </div>
      )}
    </Page>
  );
};

export default connect(
  (state: ReduxState, props: SmoothiePageDeclaredProps) => ({
    isLoading: state.smoothies.isLoading,
    smoothie: state.smoothies.get(props.smoothieId),
  }),
  { loadSmoothie, saveSmoothie }
)(SmoothiePage);
