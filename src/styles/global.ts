import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Nunito', 'Roboto', sans-serif;
    }
`;
