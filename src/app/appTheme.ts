import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#800020',
    },
    secondary: {
      main: '#dedede',
    },
    text: {
      primary: '#8b8b8b',
    },
    background: {
      paper: '#fff9fb',
    },
  },
};

export const appTheme = createTheme(themeOptions);