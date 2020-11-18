import { createContext, useContext } from 'react';
import { ThemeContextType } from './types';

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(
  defaultContext,
);
export const useColorMode = () => useContext(ThemeContext);
