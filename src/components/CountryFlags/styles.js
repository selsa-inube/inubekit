import styled from "styled-components";

const StyledImg = styled.img`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  max-width: ${({ $maxWidth }) => $maxWidth};
  max-height: ${({ $maxHeight }) => $maxHeight};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
`;

export { StyledImg };
