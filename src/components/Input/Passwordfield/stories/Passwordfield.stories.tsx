import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordfieldController } from "./Passwordfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const meta = {
  title: "Inputs/Input/Password",
  component: PasswordfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<IInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    id: "Password",
    label: "Contraseña",
    placeholder: "Escribe tu contraseña",
    size: "wide",
    status: "pending",
    message: "La contraseña no es correcta",
    disabled: false,
    fullwidth: false,
    required: true,
  },
};

export default meta;
export { Default };
