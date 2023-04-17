import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    input,button,select {
      border-radius: 10px;
    }

    body {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 1em;
      color: #000;
      background-color: #003346;
    }
    
`;
