import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { Page, SmoothieList } from 'src/components';
import { Collection, loadAllSmoothies, ReduxState, Smoothie } from 'src/data';

interface HomePageProps extends RouteComponentProps {
  smoothies: Collection<Smoothie>;
  loadAllSmoothies: () => Promise<void>;
}

const HomePage = (props: HomePageProps) => {
  useEffect(() => {
    props.loadAllSmoothies();
  }, []);

  return (
    <Page title="Blenderbuss" icon="blender" isLoading={props.smoothies.isLoading}>
      {() => <SmoothieList smoothies={props.smoothies.sort('name').all()} />}
    </Page>
  );
};

export default connect(
  (state: ReduxState) => ({ smoothies: state.smoothies }),
  { loadAllSmoothies }
)(HomePage);
