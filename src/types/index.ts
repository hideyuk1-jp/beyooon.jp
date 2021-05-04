import { baseTheme } from '../styles/theme';

export type ColorMode = 'light' | 'dark';

export type Theme = typeof baseTheme;

export interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: () => void;
}
