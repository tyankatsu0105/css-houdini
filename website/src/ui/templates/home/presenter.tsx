import { Grid } from '@material-ui/core';
import * as React from 'react';

import * as Components from '~ui/components';

type Props = {
  workletItems: Components.WorkletCard.WorkletItem[];
};

export const Component: React.VFC<Props> = (props) => (
  <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    spacing={2}
  >
    {props.workletItems.map((workletItem) => (
      <Grid item xs={4} key={workletItem.name}>
        <Components.WorkletCard.Component
          component={workletItem.component}
          name={workletItem.name}
        />
      </Grid>
    ))}
  </Grid>
);
