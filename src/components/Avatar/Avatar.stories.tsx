import { Avatar, IAvatar } from "./index";

import { props, parameters } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters,
  argTypes: props,
};

export const Default = (args: IAvatar) => <Avatar {...args} />;

Default.args = {
  unreadNotifications: 1,
};

export default story;
