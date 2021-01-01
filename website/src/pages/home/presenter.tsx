import * as React from 'react';
import { Helmet } from 'react-helmet';

import * as Templates from '~ui/templates';

const Component = () => (
  <>
    <Helmet>
      <title>TOP</title>
    </Helmet>

    <Templates.Home.Component />
  </>
);

export default Component;
