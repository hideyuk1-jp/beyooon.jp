import React, { useState, useEffect } from 'react';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';

import { ThemeContext } from '../themeContext';
import { getTheme } from '../styles/theme';
import { ColorMode } from '../types';

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    'light',
  );
  const theme = getTheme(colorMode);

  useEffect(() =>
    setColorMode(
      localStorage.getItem('colorMode') === 'dark'
        ? 'dark'
        : 'light',
    ),
  );

  function toggleColorMode() {
    // colorMode切り替え用関数
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
    localStorage.setItem(
      'colorMode',
      colorMode === 'light' ? 'dark' : 'light',
    );
  }
  return (
    <EmotionProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  );
};

export default ThemeProvider;
