import React from 'react';
import{BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
<BrowserRouter>
<Switch>
        <Route exact path="/" component={Form} />
      </Switch>
      </BrowserRouter>
      </ThemeProvider>
  );
}
