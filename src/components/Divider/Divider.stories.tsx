import { Divider, IDivider } from ".";
import { parameters, props } from "./props";

const story = {
  title: "Layout/Divider",
  component: Divider,
  parameters,
  argTypes: props,
};

const Default = (args: IDivider) => <Divider {...args} />;

Default.args = {
  dashed: false,
  marginTop: "24px",
  marginBottom: "8px",
};

export { Default };
export default story;
