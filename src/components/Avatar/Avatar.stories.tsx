import { Avatar } from "./index";

import { props, parameters } from "./props";

const story = {
  title: "Avatar",
  components: [Avatar],
  parameters,
  argTypes: props,
};

export const Default = () => <Avatar />;

export default story;
