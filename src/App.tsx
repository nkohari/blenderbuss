import * as React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { configureStore } from 'src/data';
import { HomePage, SmoothiePage } from 'src/pages';
import './_global.scss';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Router style={{ width: '100%', height: '100%' }}>
      <HomePage path="/" />
      <SmoothiePage path="/smoothies/:smoothieId" />
    </Router>
  </Provider>
);

export default App;
