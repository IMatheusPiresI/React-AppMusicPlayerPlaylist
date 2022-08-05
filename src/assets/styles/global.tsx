import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Abril Fatface', 'Poppins', Arial, Helvetica, sans-serif;
    }

    body {
        background-color: #0f0f0f;
        color: #FFF;
    }

    buttoon, a {
        cursor: pointer;
    }

    a,li {
        text-decoration: none;
        list-style: none;
    }
`;
