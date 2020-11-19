import { ColorMode, Theme } from '../types';

export const baseTheme = {
  colors: {
    base: '#121212',
    background: '#f8fafc',
    blackLight: '#313746',
    gray: '#727d86',
    silver: '#969fa7',
    whitesmoke: '#f1f4f7',
    highlight: '#20a8ea',
    red: '#f7615f',
    orange: '#ffa22b',
    link: '#26a6ed',
    gradient:
      'linear-gradient(-45deg,#ffa649,#f7645b,#805ed4)',
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
    'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)',
};

export const darkTheme = {
  colors: {
    base: '#fff',
    background: '#15212a',
    blackLight: '#313746',
    gray: '#727d86',
    silver: '#969fa7',
    whitesmoke: '#f1f4f7',
    highlight: '#20a8ea',
    red: '#f7615f',
    orange: '#ffa22b',
    link: '#3eb0ef',
    gradient:
      'linear-gradient(-45deg,#ffa649,#f7645b,#805ed4)',
  },
};

export function getTheme(colorMode: ColorMode): Theme {
  switch (colorMode) {
    case 'light':
      return baseTheme;
    case 'dark':
      return { ...baseTheme, ...darkTheme };
    default:
      return baseTheme;
  }
}

export default getTheme;
