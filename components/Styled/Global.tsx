import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
}

a{
  color: black;
  text-decoration: none;
}


body {
    background-color: #f9f3f3;
    color: hsl(192, 100%, 9%);
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    margin: 0;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100%;
}

`;
