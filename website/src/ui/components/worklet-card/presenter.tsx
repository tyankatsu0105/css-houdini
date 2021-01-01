import { Box, Card, CardContent, Link, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

import * as Hooks from './hooks';

type Props = {
  heading: string;
};

export const Component: React.VFC<Props> = (props) => {
  const { Component: RippleComponent } = Hooks.useCSSHoudiniRipple();
  return (
    <Card>
      <CardContent>
        <Heading>
          <Link
            href={`https://github.com/tyankatsu0105/css-houdini/tree/main/packages/${props.heading}`}
            target="_blank"
          >
            {props.heading}
          </Link>
        </Heading>
        <Box marginTop={2}>
          <StyledCard>
            <CardContent>
              <RippleComponent />
            </CardContent>
          </StyledCard>
        </Box>
      </CardContent>
    </Card>
  );
};

const Heading = styled((props) => (
  <Typography variant="h5" component="h3" {...props} />
))`
  font-weight: bold;
`;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.palette.common.white};
`;
