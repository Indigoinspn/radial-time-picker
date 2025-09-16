import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from './theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
