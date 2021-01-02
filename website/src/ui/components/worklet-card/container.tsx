import * as React from 'react';

import * as Presenter from './presenter';

type Props = Presenter.WorkletItem;

export const Component: React.VFC<Props> = (props) => (
  <Presenter.Component {...props} />
);
