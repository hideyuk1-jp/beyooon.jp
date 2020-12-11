import { css } from '@emotion/core';

const resetStyle = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const baseStyle = css`
  :root,
  [data-color-mode='light'] {
    --ease-in-out-quad: cubic-bezier(
      0.455,
      0.03,
      0.515,
      0.955
    );
    --color-text-primary: #000;
    --color-text-light: #62767e;
    --color-bg-primary: #fafafa;
    --color-bg-accent: #fff;
    --color-text-link: #0070f3;
    --color-border: #b6d2e2;

    --color-theme-gradient: linear-gradient(
      90deg,
      #4bc0c8 0%,
      #c779d0 50%,
      #feac5e 100%
    );
    --color-theme-primary: #4bc0c8;
    --color-theme-secondary: #c779d0;
    --color-theme-tertiary: #feac5e;
    --color-header-text: #fff;
    --color-header-text-light: #92a3ab;
    --color-header-bg: #000;
    --color-header-navbar-bg: rgba(0, 0, 0, 0.8);
    --color-header-border: #353946;

    --size-maxwidth-medium: 1024px;
    --size-maxwidth-small: 768px;
    --size-sidespace-medium: 4vw;

    --colormode-transition: background 0.25s
        var(--ease-in-out-quad),
      color 0.25s var(--ease-in-out-quad),
      fill 0.25s var(--ease-in-out-quad),
      border 0.25s var(--ease-in-out-quad);
  }

  [data-color-mode='dark'] {
    --color-text-primary: #fff;
    --color-text-light: #92a3ab;
    --color-bg-primary: #1e1f26;
    --color-bg-accent: #000;
    --color-text-link: #03a9f4;
    --color-border: #353946;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }
`;

const globalStyle = css`
  ${resetStyle}
  ${baseStyle}
`;

/* CSS Variables では media query に書けないので breakpoints は theme で管理 */
export const theme = {
  breakpoints: {
    small: '480px',
    medium: '768px',
    large: '1024px',
  },
};

export default globalStyle;
