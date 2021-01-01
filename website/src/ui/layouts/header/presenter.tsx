import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

export const Component = () => (
  <Box
    component="header"
    padding={2}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Heading>@tyankatsu0105/css-houdini</Heading>

    <IconButton
      size="medium"
      href="https://github.com/tyankatsu0105/css-houdini"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </IconButton>
  </Box>
);

const Heading = styled((props) => (
  <Typography variant="h2" component="h1" {...props} />
))`
  font-weight: bold;
`;
