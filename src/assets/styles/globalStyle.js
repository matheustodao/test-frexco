import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
  }
  html, body {
    font-size: 62.5%;
    min-height: 100vh;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.backgrounds.dark};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 1rem;
  }

  main {
    margin: 13.2rem auto;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }

  input {
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;
