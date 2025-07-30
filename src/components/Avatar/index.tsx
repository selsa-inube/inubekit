import { Icon } from "../Icon";
import { MdPersonOutline } from "react-icons/md";
import { NotificationsBadge } from "./NotificationsBadge";
import { AvatarWrapper } from "./styles";

interface IAvatar {
  onClick?: () => void;
  unreadNotificationsAmount?: number;
}

const Avatar = (props: IAvatar) => {
  const { onClick, unreadNotificationsAmount = 0 } = props;
  const showUnreadNotifications = unreadNotificationsAmount > 0;

  return (
    <AvatarWrapper>
      <Icon
        appearance="primary"
        cursorHover={true}
        variant="filled"
        shape="circle"
        icon={<MdPersonOutline />}
        size="32px"
        spacing="compact"
        onClick={onClick}
      />
      {showUnreadNotifications && (
        <NotificationsBadge
          unreadNotificationsAmount={unreadNotificationsAmount}
        />
      )}
    </AvatarWrapper>
  );
};

export { Avatar };
export type { IAvatar };
