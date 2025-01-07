import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "../Foundations";
import { tokens } from "./tokens";

const StyledLink = styled(Link)`
  font-family: ${({ theme, $type, $size }) =>
      theme?.typography?.[$type]?.[$size]?.font || "Roboto"},
    sans-serif;
  line-height: ${({ $type, $size }) =>
    inube.typography[$type][$size].lineHeight};
  font-size: ${({ $type, $size }) => inube.typography[$type][$size].size};
  letter-spacing: ${({ $type, $size }) =>
    inube.typography[$type][$size].tracking};
  font-weight: 400;
  margin: ${({ $margin }) => $margin};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme }) => {
    return theme?.link?.content?.color?.regular || tokens.content.color.regular;
  }};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid
      ${({ theme }) =>
        theme?.link?.content?.color?.hover || tokens.content.color.hover};
    color: ${({ theme }) =>
      theme?.link?.content?.color?.hover || tokens.content.color.hover};
  }
`;

export { StyledLink };
