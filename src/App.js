import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyle';
import { theme } from './styles/variables';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </ThemeProvider>
  );
}

export default App;
