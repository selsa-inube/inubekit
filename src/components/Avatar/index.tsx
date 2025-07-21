import { Icon } from "../Icon";
import { MdPersonOutline } from "react-icons/md";
import { BadgeNotifications } from "../BadgeNotifications";
import { AvatarWrapper } from "./styles";

interface IAvatar {
  onClick?: () => void;
  unreadNotifications?: number;
}

const Avatar = (props: IAvatar) => {
  const { onClick, unreadNotifications = 0 } = props;
  const showUnreadNotifications = unreadNotifications > 0;

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
        <BadgeNotifications unreadNotifications={unreadNotifications} />
      )}
    </AvatarWrapper>
  );
};

export { Avatar };
export type { IAvatar };
