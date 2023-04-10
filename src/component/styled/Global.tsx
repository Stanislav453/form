import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1em;
        color: #000;
          background-image: linear-gradient(
    to top,
    #051937,
    #003346,
    #284b4d,
    #51625a,
    #767872
  );
    }
`;
