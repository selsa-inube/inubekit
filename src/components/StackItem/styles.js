import styled from "styled-components";

const StyledStackItem = styled.div`
  order: ${({ $order }) => $order};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  align-self: ${({ $alignSelf }) => $alignSelf};
`;

export { StyledStackItem };
