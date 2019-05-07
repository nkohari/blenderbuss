import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { IngredientList, Page, SplashImage } from 'src/components';
import { loadSmoothie, ReduxState, Smoothie } from 'src/data';
import * as styles from './SmoothiePage.scss';

interface SmoothiePageParams {
  smoothieId: string;
}

interface SmoothiePageDeclaredProps extends RouteComponentProps<SmoothiePageParams> {}

interface SmoothiePageConnectedProps {
  isLoading: boolean;
  smoothie: Smoothie;
  loadSmoothie: (id: string) => Promise<void>;
}

const SmoothiePage = (props: SmoothiePageDeclaredProps & SmoothiePageConnectedProps) => {
  useEffect(() => {
    props.loadSmoothie(props.smoothieId);
  }, [props.smoothieId]);

  const title = props.smoothie ? props.smoothie.name : 'Loading';

  return (
    <Page title={title} icon="smoothie" backUrl="/" isLoading={props.isLoading}>
      {() => (
        <div className={styles.layout}>
          <IngredientList ingredients={props.smoothie.ingredients} />
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
  { loadSmoothie }
)(SmoothiePage);
