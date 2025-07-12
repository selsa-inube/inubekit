import styled from "styled-components";

import { palette } from "../Foundations/palette";
import { box } from "./tokens";

const StyledBox = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, $appearance }) =>
    theme?.box?.[$appearance]?.border?.color || box[$appearance].border.color};
  background: ${({ theme, $appearance }) =>
    theme?.box?.[$appearance]?.background?.color ||
    box[$appearance].background.color};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
`;

export { StyledBox };
