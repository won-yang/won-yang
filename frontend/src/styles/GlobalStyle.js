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
    a:visited{
      color:white;
    }
    button {
      border:none;
    }
`;

export default GlobalStyle;
