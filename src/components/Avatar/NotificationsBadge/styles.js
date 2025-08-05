import styled from "styled-components";
import { notificationsBadge } from "./tokens";

const StyledNotificationsBadge = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ theme }) =>
    theme?.notificationsBadge?.background?.color ||
    notificationsBadge.background.color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  justify-content: center;
  left: 20.5px;
  top: -4px;
  z-index: 1;
`;

export { StyledNotificationsBadge };
