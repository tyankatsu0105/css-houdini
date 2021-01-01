import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';

import * as Shared from '~shared';
import * as Layouts from '~ui/layouts';

import { HomePage } from './pages/home';

export const App = () => (
  <>
    <Helmet titleTemplate={`%s | ${Shared.Consts.SITE_NAME}`} />
    <Layouts.Container.Component>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Layouts.Container.Component>
  </>
);
