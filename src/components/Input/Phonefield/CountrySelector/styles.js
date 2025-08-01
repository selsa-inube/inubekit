import styled from "styled-components";
import { inube } from "../../../Foundations";
import { tokens as InputTokens } from "../../tokens";

const StyledContainer = styled.div`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
`;

const StyledSelect = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: 1px solid
    ${({ theme }) => {
      return (
        theme?.input?.border?.color.disabled ||
        InputTokens.border.color.disabled
      );
    }};
  border-radius: 8px 0 0 8px;
  padding: 8px 12px 8px 16px;
  height: 100%;
  background: ${({ theme }) => {
    return theme?.palette?.neutral?.n20 || inube.palette.neutral.N20;
  }};

  & img {
    filter: ${({ $disabled }) => ($disabled ? "grayscale(0.9)" : "none")};
  }
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
  padding: 4px 16px;
  cursor: pointer;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.input?.background?.color?.regular ||
      InputTokens.background.color.regular};
  }
`;

export { StyledContainer, StyledSelect, StyledItem };
