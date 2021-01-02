import * as React from 'react';
import { Helmet } from 'react-helmet';

import * as Components from '~ui/components';
import * as Templates from '~ui/templates';

import * as Hooks from './hooks';

const Component = () => {
  const workletItems: Components.WorkletCard.WorkletItem[] = [
    {
      component: Hooks.useCSSHoudiniRipple().Component,
      name: Hooks.useCSSHoudiniRipple().name,
    },
    {
      component: Hooks.useCSSHoudiniGlitch().Component,
      name: Hooks.useCSSHoudiniGlitch().name,
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
