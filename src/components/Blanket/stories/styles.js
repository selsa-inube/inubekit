import styled from "styled-components";
import { inube } from "../../Foundations";
import { tokens } from "../tokens";

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const StyledButton = styled.button`
  cursor: pointer;
  height: 36px;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  width: fit-content;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${tokens.background.color};
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  color: ${tokens.background.color};

  &:hover {
    background-color: ${tokens.background.color};
  }
`;

export { StyledBackdropBlanket, StyledButton };
