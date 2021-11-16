import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('bgimg.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
    font-family: Georgia, serif; 
  }
`;

export default GlobalStyle;
