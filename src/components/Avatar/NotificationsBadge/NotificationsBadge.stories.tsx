import { NotificationsBadge, INotificationsBadge } from "./index";
import { props } from "./props";

const story = {
  title: "data/Avatar/notificationsBadge",
  components: [NotificationsBadge],
  argTypes: props,
};

export const Default = (args: INotificationsBadge) => (
  <NotificationsBadge {...args} />
);

Default.args = {
  unreadNotificationsAmount: 3,
};

export default story;
