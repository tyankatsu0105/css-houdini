import * as React from 'react';

import * as Presenter from './presenter';

type Props = {
  heading: string;
};

export const Component: React.VFC<Props> = (props) => (
  <Presenter.Component {...props} />
);
