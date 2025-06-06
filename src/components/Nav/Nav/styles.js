import styled from "styled-components";
import { tokens } from "./tokens";
import { MdKeyboardArrowDown } from "react-icons/md";

const SeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 8px 16px;
  height: 1px;
  padding: 0px;
  background-color: ${({ theme }) =>
    theme?.nav?.divider?.color || tokens.divider.color};
`;

const StyledAnimatedWrapper = styled.div`
  opacity: 0;
  transition: all ${(props) => props.$animation.duration}s
    ${(props) => props.$animation.ease};
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

const StyledCollapseContainer = styled.div`
  cursor: ${({ $collapse }) => ($collapse ? "pointer" : "default")};
  & > div {
    background-color: ${({ theme, $collapse, $expanded }) =>
      $collapse && $expanded
        ? theme?.nav?.subtitle?.background?.expanded ||
          tokens.subtitle.background.expanded
        : theme?.nav?.background?.color || tokens.background.color};
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
`;

const StyledNav = styled.nav`
  width: 248px;
  background-color: ${({ theme }) =>
    theme?.nav?.background?.color || tokens.background.color};
  border-right: 1px solid
    ${({ theme }) => theme?.nav?.divider?.color || tokens.divider.color};
  height: inherit;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-gutter: auto;

  & > div > div > li {
    cursor: pointer;
  }
`;

const StyledRotatingIcon = styled(MdKeyboardArrowDown)`
  transition: transform 0.2s ease-in-out;
  transform: ${({ $expanded }) =>
    $expanded ? "rotate(180deg)" : "rotate(0deg)"};
`;

const StyledFooterLogoImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  display: block;
  padding: 32px 48px;
`;

export {
  SeparatorLine,
  StyledAnimatedWrapper,
  StyledCollapseContainer,
  StyledFooter,
  StyledFooterLogoImage,
  StyledNav,
  StyledRotatingIcon,
};
