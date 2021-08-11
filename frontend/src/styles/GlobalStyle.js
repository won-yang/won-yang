import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    html, body{
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    #root{
      width:100%;
      height:100%;
    }
    /* button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    } */
`;

export default GlobalStyle;
