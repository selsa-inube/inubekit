import styled from "styled-components";
import { tokens as TextTokens } from "../../Text/tokens";

const StyledTab = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ appearance, disabled, selected, theme }) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.text?.[appearance]?.content.color.regular ||
      TextTokens[appearance].content.color.regular
    }`};
  padding-bottom: 4px;
  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
