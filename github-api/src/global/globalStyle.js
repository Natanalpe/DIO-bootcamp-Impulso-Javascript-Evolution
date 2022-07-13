import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-image: linear-gradient(125deg, #152032, #20344d);
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #131324;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #09090f;
        }
    }
`