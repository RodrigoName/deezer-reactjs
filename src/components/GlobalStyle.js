import { createGlobalStyle } from 'styled-components';
import { darkColor } from '../styles';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

body{
    height: 100vh;
    background-color: ${darkColor};
}
`;

export default GlobalStyle;
