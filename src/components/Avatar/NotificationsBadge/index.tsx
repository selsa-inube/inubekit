import { StyledNotificationsBadge } from "./styles";
import { Text } from "../../Text";

interface INotificationsBadge {
  unreadNotificationsAmount: number;
}
const NotificationsBadge = (props: INotificationsBadge) => {
  const { unreadNotificationsAmount = 0 } = props;

  return (
    <StyledNotificationsBadge>
      <Text
        appearance="light"
        type="label"
        size="small"
        weight="normal"
        children={`${unreadNotificationsAmount}`}
        textAlign="center"
      />
    </StyledNotificationsBadge>
  );
};

export { NotificationsBadge };
export type { INotificationsBadge };
