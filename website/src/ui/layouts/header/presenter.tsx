import { Box, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

export const Component = () => (
  <Box component="header" padding={2}>
    <Heading>@tyankatsu0105/css-houdini</Heading>
  </Box>
);

const Heading = styled((props) => (
  <Typography variant="h2" component="h1" {...props} />
))`
  font-weight: bold;
`;
