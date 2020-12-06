import { ColorMode, Theme } from '../types';

export const baseTheme = {
  colors: {
    base: '#000',
    light: '#62767e',
    primary: '#4BC0C8',
    secondary: '#C779D0',
    tertiary: '#FEAC5E',
    background: '#fff',
    backgroundAccent: '#e2ebf3',

    header: '#fff',
    headerLight: '#92a3ab',
    backgroundHeader: '#000',
    backgroundHeaderNavbar: 'rgba(0, 0, 0, 0.8)',
    borderHeader: '#353946',

    backgroundPostCard: 'transparent',
    link: '#0070f3',
    border: '#b6d2e2',
    gradient:
      'linear-gradient(90deg, #4BC0C8 0%, #C779D0 50%, #FEAC5E 100%)',
  },
  sizes: {
    maxWidth: '1024px',
    maxWidthSmall: '768px',
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
    background: '#000',
    backgroundAccent: '#1e1f26',
    backgroundPostCard: '#1e1f26',
    border: '#353946',
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
