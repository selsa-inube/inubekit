import { JSX } from "react/jsx-runtime";
import { TextfieldController } from "./Textfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Input/Text",
  component: TextfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <TextfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  label: "Username",
  required: true,
  type: "text",
  size: "wide",
  status: "pending",
  maxLength: 20,
  minLength: 5,
};

export { Default };
export default story;
