// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6f9bff',
      main: '#1C6DFB',
      dark: '#0043c7',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
});
