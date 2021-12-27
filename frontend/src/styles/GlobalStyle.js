import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    html, body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing : border-box;
    };
    #root{
      width:100%;
      height:100%;

    }
    span {
      line-height: normal;
    }

    a {
      text-decoration: none;
    }
    a:link {
      color:black;
    }
    a:visited {
      color:black;
    }
    a:hover {
      color:black;
    }
    a:active {
      color:black;
    }
    button {
      border:none;
    }
    h1 {
      font-size: 32px;
      font-weight: bold;
    }
    h2 {
      font-size: 28px;
      font-weight: bold;
    }
`;

export default GlobalStyle;
