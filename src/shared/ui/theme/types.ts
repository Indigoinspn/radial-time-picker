import { DefaultTheme } from 'styled-components';
import { COLORS } from './colors';

export interface Theme {
  colors: typeof COLORS;
  fonts: {
    primary: string;
    secondary: string;
  };
}
