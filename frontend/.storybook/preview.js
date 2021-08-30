// import { ThemeProvider } from "styled-components";
// import GlobalStyle from "styles/GlobalStyle";
// import { DarkTheme } from "styles/theme/DefaultTheme";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

// export const decorators = [
//   (Story, context) => (
//     <ThemeProvider theme={DarkTheme}>
//       <GlobalStyle />
//       <Story {...context} />
//     </ThemeProvider>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
