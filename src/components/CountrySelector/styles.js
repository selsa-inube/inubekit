import styled from "styled-components";
import { tokens as InputTokens } from "../Input/tokens";

const StyledFullContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 8px 12px 8px 16px;
  max-width: 126px;
  background: ${({ theme }) => {
    return (
      theme?.input?.option?.background?.hover ||
      InputTokens.option.background.hover
    );
  }};
  user-select: none;
`;

const StyledChevron = styled.div`
  display: flex;
  transition: ease;
  transition-duration: 500ms;
  transform: ${({ $displayList }) =>
    $displayList ? "rotate(-90deg)" : "rotate(90deg)"};
`;

const StyledOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  margin: 4px 0px;
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  background: ${({ theme }) => {
    return (
      theme?.input?.option?.background?.regular ||
      InputTokens.option.background.regular
    );
  }};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);

  max-height: ${({ $maxItems }) =>
    $maxItems ? `${$maxItems * 46}px` : "auto"};
  overflow-y: ${({ $maxItems, $totalOptions }) =>
    $maxItems && $totalOptions > $maxItems ? "auto" : "hidden"};

  &::-webkit-scrollbar {
    width: 6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover::-webkit-scrollbar,
  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
    pointer-events: auto;
  }

  & > li:hover {
    background: ${({ theme }) => {
      return (
        theme?.input?.option?.background?.hover ||
        InputTokens.option.background.hover
      );
    }};
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

export { StyledFullContainer, StyledChevron, StyledOptionList, StyledItem };
