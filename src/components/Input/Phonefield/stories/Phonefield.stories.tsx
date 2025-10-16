import { JSX } from "react/jsx-runtime";
import { PhonefieldController } from "./Phonefield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Input/Phone",
  component: PhonefieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <PhonefieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "phone",
  label: "Phone",
  placeholder: "Enter phone number",
  required: true,
  type: "phone",
  size: "wide",
  status: "pending",
  hideDialCode: false,
};

const WithValue = (args: IInput) => <PhonefieldController {...args} />;
WithValue.args = {
  ...Default.args,
  initialDialValue: "+33",
  value: "1234567",
};

export { Default, WithValue };
export default story;
