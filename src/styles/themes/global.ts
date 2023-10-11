import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, input, textarea,button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: anntialiased;
}

input::placeholder{
  colot:${(props) => props.theme['base-hover']}
}

input{
  colot:${(props) => props.theme['base-hover']}
}

body{
  background: ${(props) => props.theme['background']};
  color: ${(props) => props.theme['base-label']};
}

button {
  border: 0;
  background: transparent;
}

 a {
  text-decoration: none;
}

 input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
}

ul {
 list-style: none ;
}

`;
