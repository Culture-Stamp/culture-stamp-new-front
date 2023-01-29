import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background: #e5e7eb;
  }
`;
export default GlobalStyle;