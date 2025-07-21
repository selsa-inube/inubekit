import { StyledBadgeNotifications } from "./styles";
import { Text } from "../Text";

interface IBadgeNotifications {
  unreadNotifications: number;
}
const BadgeNotifications = (props: IBadgeNotifications) => {
  const { unreadNotifications = 0 } = props;

  return (
    <StyledBadgeNotifications>
      <Text
        appearance="light"
        type="label"
        as="span"
        size="small"
        weight="bold"
        children={`${unreadNotifications}`}
        textAlign="center"
      />
    </StyledBadgeNotifications>
  );
};

export { BadgeNotifications };
export type { IBadgeNotifications };
