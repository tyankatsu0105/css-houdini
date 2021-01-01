import { Box, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

export const Component = () => (
  <Box component="footer" padding={2}>
    <Copyright variant="body1">© 2021 tyankatsu</Copyright>
  </Box>
);

const Copyright = styled(Typography)`
  text-align: center;
`;
