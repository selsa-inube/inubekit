import styled from "styled-components";
import { inube } from "../../Foundations";

const StyledFlag = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A},
    0px 1px 3px 1px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
  overflow: hidden;
  overflow-wrap: anywhere;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  width: 400px;
  min-height: 78px;
  @media screen and (max-width: 528px) {
    width: 100%;
    min-height: 58px;
  }
`;

export { StyledFlag };
