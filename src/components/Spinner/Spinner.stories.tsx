import { Spinner, ISpinner } from ".";
import { props, parameters } from "./props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
  args: {
    size: "medium",
    appearance: "primary",
    transparent: false,
  },
  argTypes: props,
};

const Default = (args: ISpinner) => <Spinner {...args} />;

export { Default };
export default story;
