import '@emotion/react';
import { Theme as MyTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
