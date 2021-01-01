import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { HomePage } from './pages/home';

export const App = () => (
  <>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  </>
);
