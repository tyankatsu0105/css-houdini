import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import * as Layouts from '~ui/layouts';

import { HomePage } from './pages/home';

export const App = () => (
  <Layouts.Container.Component>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  </Layouts.Container.Component>
);
