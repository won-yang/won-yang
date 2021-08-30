import { css } from "styled-components";

const responsiveSet = (horizon, vertical, direction) => css`
  display: flex;
  justify-content: ${horizon || "center"};
  align-items: ${vertical || "center"};
  flex-direction: ${direction || "row"};
`;

const Mixin = { responsiveSet };

export default Mixin;
