import 'styled-components';

import { theme } from '../styles/theme';

// and extend them!
declare module 'styled-components' {
  type Theme = typeof theme;
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
