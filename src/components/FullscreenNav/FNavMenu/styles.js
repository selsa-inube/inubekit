import styled from "styled-components";
import { tokens } from "../tokens";

const StyledFullscreenNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const StyledFooterLogoImage = styled.img`
  width: 50%;
  max-width: 200px;
  margin: 0 auto;
`;

export { StyledFullscreenNav, StyledFooterLogoImage };
