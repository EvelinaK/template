import React from 'react';
import { createTheme, ThemeProvider, Button } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1AAA8D',
    },
    secondary: {
      main: '#30B78D',
    },
  }, fontFamily: [
    'Mulish',
  ].join(','),
});
export default theme;