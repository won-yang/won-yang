import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBgColor: string;

    bgColors: {
      primary: string;
    };
  }
}
