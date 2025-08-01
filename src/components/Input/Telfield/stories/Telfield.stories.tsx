import { JSX } from "react/jsx-runtime";
import { TelfieldController } from "./Telfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Input/Tel",
  component: TelfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <TelfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "tel",
  label: "tel",
  placeholder: "Enter your tel number",
  required: true,
  type: "tel",
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
