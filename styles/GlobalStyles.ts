import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme"

type Props = {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  * , *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;