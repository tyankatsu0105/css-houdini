import { teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    type: 'dark',
  },
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
});
