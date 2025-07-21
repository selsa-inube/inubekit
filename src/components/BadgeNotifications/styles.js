import styled from "styled-components";
import { badgeNotifications } from "./tokens";

const StyledBadgeNotifications = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ theme }) =>
    theme?.badgeNotifications?.background?.color ||
    badgeNotifications.background.color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  justify-content: center;
  left: 20.5px;
  top: -4px;
  z-index: 2;
`;

export { StyledBadgeNotifications };
