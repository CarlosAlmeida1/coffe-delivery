import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/themes/global';
import { defaultTheme } from './styles/themes/default';
import { ShoppingCartProvider } from './contexts/ShoppingCarContext';
import { ToastContainer, Slide } from 'react-toastify';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
          <ToastContainer
            transition={Slide}
            autoClose={1500}
            limit={2}
            toastStyle={{ zIndex: 9999 }}
            hideProgressBar
            pauseOnHover={false}
            closeOnClick
            position='top-center'
          />
          <GlobalStyles />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
