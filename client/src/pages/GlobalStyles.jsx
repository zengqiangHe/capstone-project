import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #ffffff;
    --blue: #00A3FF;
    --orange: #FD9F2E;
    --darkred: #FF666;
    --darkpink: #F06565;
    --darkgrey: #E5E5E5;
    --black: #181818;


  }

  body {
    min-height: 100vh;
    background-color: var(--darkgrey);
    font-family: 'Libre Baskerville', serif, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    color: var(--white);
  }
`;
