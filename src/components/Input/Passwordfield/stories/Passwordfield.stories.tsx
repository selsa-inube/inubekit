import { JSX } from "react/jsx-runtime";
import { PasswordfieldController } from "./Passwordfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Input/Password",
  component: PasswordfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <PasswordfieldController {...args} />
);

Default.args = {
  id: "Password",
  label: "Contraseña",
  placeholder: "Escribe tu contraseña",
  size: "wide",
  status: "pending",
  message: "La contraseña no es correcta",
  disabled: false,
  fullwidth: false,
  required: true,
};

export { Default };
export default story;
