import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f5f5f7;
    color: #1d1d1f;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
`;

export default GlobalStyle;
