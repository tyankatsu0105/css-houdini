import * as React from 'react';
import { Helmet } from 'react-helmet';

import * as Components from '~ui/components';
import * as Templates from '~ui/templates';

import * as Hooks from './hooks';

const Component = () => {
  const {
    Component: RippleComponent,
    name: RippleComponentName,
  } = Hooks.useCSSHoudiniRipple();

  const {
    Component: StripeComponent,
    name: StripeComponentName,
  } = Hooks.useCSSHoudiniStripe();

  const workletItems: Components.WorkletCard.WorkletItem[] = [
    {
      component: RippleComponent,
      name: RippleComponentName,
    },
    {
      component: StripeComponent,
      name: StripeComponentName,
    },
  ];

  return (
    <>
      <Helmet>
        <title>TOP</title>
      </Helmet>

      <Templates.Home.Component workletItems={workletItems} />
    </>
  );
};

export default Component;
