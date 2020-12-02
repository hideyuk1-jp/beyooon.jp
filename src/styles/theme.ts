import { ColorMode, Theme } from '../types';

export const baseTheme = {
  colors: {
    base: '#121212',
    light: '#738a94',
    primary: '#4BC0C8',
    secondary: '#C779D0',
    tertiary: '#FEAC5E',
    background: '#f8fafc',
    backgroundAccent: '#ffffff',
    backgroundHeader: 'hsl(210 40% 98% / 0.8)',
    link: '#20a8ea',
    border: '#e5eff5',
    gradient:
      'linear-gradient(90deg, #4BC0C8 0%, #C779D0 50%, #FEAC5E 100%)',
  },
  sizes: {
    maxWidth: '1024px',
  },
  sideSpace: {
    base: '4vw',
  },
  responsive: {
    small: '480px',
    medium: '768px',
    large: '1024px',
  },
  colorModeTransition:
    'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad), fill 0.25s var(--ease-in-out-quad), border 0.25s var(--ease-in-out-quad)',
};

export const darkTheme = {
  colors: {
    base: '#fff',
    light: '#92a3ab',
    background: '#131417',
    backgroundAccent: '#1e1f26',
    backgroundHeader: 'hsl(225 10% 8% / 0.8)',
    border: '#2c303a',
  },
};

export function getTheme(colorMode: ColorMode): Theme {
  const theme = JSON.parse(JSON.stringify(baseTheme));
  if (colorMode === 'dark')
    theme.colors = {
      ...baseTheme.colors,
      ...darkTheme.colors,
    };
  return theme;
}

export default getTheme;
