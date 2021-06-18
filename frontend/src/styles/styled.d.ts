import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      mainBgColor: string;
      svgSize: {
        small: string;
        middle: string;
        large: string;
      };
    };

    bgColors: {
      primary: string;
    };
  }
}
