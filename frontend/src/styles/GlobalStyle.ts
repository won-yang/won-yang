import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    /* 상속되는 요소들 작성 */
    /* font-family */
    margin: 0;
    padding: 0;
  }
`;
