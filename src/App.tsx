import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/themes/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
