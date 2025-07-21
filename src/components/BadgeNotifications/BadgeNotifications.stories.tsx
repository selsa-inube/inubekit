import { BadgeNotifications, IBadgeNotifications } from "./index";
import { props } from "./props";

const story = {
  title: "feedback/BadgeNotifications",
  components: [BadgeNotifications],
  argTypes: props,
};

export const Default = (args: IBadgeNotifications) => (
  <BadgeNotifications {...args} />
);

Default.args = {
  unreadNotifications: 3,
};

export default story;
