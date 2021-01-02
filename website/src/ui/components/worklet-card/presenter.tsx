import { Box, Card, CardContent, Link, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

export type WorkletItem = {
  component: () => JSX.Element;
  name: string;
};

type Props = WorkletItem;

const createLink = (name: Props['name']) =>
  `https://github.com/tyankatsu0105/css-houdini/tree/main/packages/${name}`;

export const Component: React.VFC<Props> = (props) => {
  return (
    <Card>
      <CardContent>
        <Heading>
          <Link href={createLink(props.name)} target="_blank">
            {props.name}
          </Link>
        </Heading>
        <Box marginTop={2}>
          <StyledCard>
            <props.component />
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
  height: 200px;
`;
