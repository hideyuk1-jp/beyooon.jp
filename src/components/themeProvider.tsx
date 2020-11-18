import React, { useState } from 'react';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';

import { ThemeContext } from '../themeContext';
import { getTheme } from '../styles/theme';
import { ColorMode } from '../types';

const ThemeProvider: React.FC = ({ children }) => {
  const initialColorMode =
    localStorage.getItem('colorMode') === 'dark'
      ? 'dark'
      : 'light';
  const [colorMode, setColorMode] = useState<ColorMode>(
    initialColorMode,
  );
  const theme = getTheme(colorMode);

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
