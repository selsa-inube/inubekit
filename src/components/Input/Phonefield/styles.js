import styled from "styled-components";

export const SelectorWrapper = styled.div`
  position: relative;
  min-width: 140px;
  user-select: none;
`;

export const SelectedButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 15px;
  border: 2px solid #247aff;
  border-right: none;
  border-radius: 8px 0 0 8px;
  background: #fff;
  font-size: 17px;
  cursor: pointer;
`;

export const DialStyled = styled.span`
  font-weight: 600;
  color: #445;
`;

export const Chevron = styled.span`
  font-size: 13px;
  margin-left: 2px;
  color: #445;
`;

export const SelectDropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 7px;
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 6px 32px #0002;
  max-height: 270px;
  overflow-y: auto;
  z-index: 9;
  padding: 8px 0;
`;

export const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 18px 9px 17px;
  cursor: pointer;
  transition: background 0.12s;
  &:hover {
    background: #f1f3f9;
  }
`;

export const OptionLabel = styled.span`
  color: #222;
  flex: 1;
  font-size: 16px;
`;

export const OptionDial = styled.span`
  color: #888;
  font-size: 15px;
`;
