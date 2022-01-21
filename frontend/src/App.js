import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ShopCartContextProvider } from './contexts/ShopCartContext';

import Router from './Router';

import Header from './components/Header';

import GlobalStyle from './assets/styles/globalStyle';
import theme from './assets/styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ShopCartContextProvider>
          <GlobalStyle />
          <Header />
          <Router />
        </ShopCartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
