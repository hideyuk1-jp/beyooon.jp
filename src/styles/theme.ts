import { ColorMode, Theme } from '../types';

export const baseTheme = {
  colors: {
    base: '#121212',
    background: '#f8fafc',
    link: '#20a8ea',
    gradient: {
      orange: 'linear-gradient(to right, #f12711, #f5af19)',
    },
  },
  sizes: {
    maxWidth: '1024px',
  },
  sideSpace: {
    base: '4vw',
  },
  responsive: {
    small: '500px',
    medium: '768px',
    large: '950px',
  },
  colorModeTransition:
    'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad), fill 0.25s var(--ease-in-out-quad)',
};

export const darkTheme = {
  colors: {
    base: '#fff',
    background: '#15212a',
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
