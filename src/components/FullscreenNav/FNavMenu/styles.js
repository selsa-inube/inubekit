import styled from "styled-components";
import { tokens } from "../tokens";

const StyledFullscreenNav = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) =>
    theme?.fullscreenNav?.background?.color || tokens.background.color};
  padding: 0px 0px;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  & > li {
    cursor: pointer;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

const StyledFooterLogoImage = styled.img`
  width: 124px;
  height: auto;
  display: block;
  padding: 24px 62px;
`;

export { StyledFullscreenNav, StyledFooterLogoImage, StyledFooter };
