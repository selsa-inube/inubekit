import { BadgeNotifications, IBadgeNotifications } from "./index";
import { props } from "./props";

const story = {
  title: "data/Avatar/BadgeNotifications",
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
