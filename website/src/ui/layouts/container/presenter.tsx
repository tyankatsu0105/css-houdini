import { Box } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

import * as Footer from '../footer';
import * as Header from '../header';

export const Component: React.FC = (props) => (
  <>
    <HolyGrail>
      <Header.Component />
      <Box padding={2} component="main">
        {props.children}
      </Box>
      <Footer.Component />
    </HolyGrail>
  </>
);

const HolyGrail = styled(Box)`
  display: grid;
  grid-template-rows: minmax(50px, auto) 1fr minmax(50px, auto);
  min-height: 100vh;
`;
