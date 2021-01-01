import { Grid } from '@material-ui/core';
import * as React from 'react';

import * as Components from '~ui/components';

export const Component = () => (
  <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    spacing={2}
  >
    <Grid item xs={4}>
      <Components.WorkletCard.Component heading="css-houdini-ripple" />
    </Grid>
  </Grid>
);
