import { action } from "storybook/actions";

import { Flag, IFlag } from ".";
import { FlagProvider } from "../FlagsProvider";
import { parameters, props } from "./props";

const story = {
  title: "feedback/Flag",
  components: [Flag],
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: IFlag) => (
  <FlagProvider>
    <Flag {...args} />{" "}
  </FlagProvider>
);
const closeFlag = () => {
  action("Flag closed")();
};
Default.args = {
  title: "Title",
  description: "Description",
  appearance: "primary",
  duration: 10000,
  closeFlag: closeFlag,
};

export { Default };
export default story;
