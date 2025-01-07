import { props, parameters } from "./props";
import { Label, ILabel } from ".";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const Default = (args: ILabel) => {
  return <Label {...args}>{args.children}</Label>;
};
Default.args = {
  htmlFor: "id",
  children: "Label Text",
  disabled: false,
  size: "large",
  focused: false,
  invalid: false,
  margin: "0px",
  padding: "0px",
};

export { Default };
export default story;
