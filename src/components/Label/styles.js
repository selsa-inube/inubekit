import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
  width: 100%;

  > span:last-child {
    align-self: center;
  }

  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
`;

export { StyledLabel };
