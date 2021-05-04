import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { ThemeProvider as EmotionProvider } from '@emotion/react';

import { getTheme } from '../styles/theme';
import { ThemeContextType, ColorMode } from '../types';

export const ThemeContext = createContext<ThemeContextType>(
  {
    colorMode: 'light',
    setColorMode: () => {},
  },
);

export const useColorMode = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    'light',
  );
  const theme = getTheme(colorMode);

  useEffect(
    () =>
      setColorMode(
        localStorage.getItem('colorMode') === 'dark'
          ? 'dark'
          : 'light',
      ),
    [],
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
